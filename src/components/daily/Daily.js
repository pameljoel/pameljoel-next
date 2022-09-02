import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { enableCrisp } from '../crisp/Crisp';
import DailyHeader from './DailyHeader';
import Loading from '../status/Loading';
import Months from './Months';
import { addImagesToMonths, createLightBoxUrl } from './utils';
import Header from './Header';
import { getDataAsync } from '../../helpers';

import dailyJson from '../../../public/resources/daily.json';
import monthsJson from '../../../public/resources/months.json';

const Daily = () => {
  const [images, setImages] = useState(null);
  const [months, setMonths] = useState([]);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [lightBoxUrl, setLightBoxUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [day, setDay] = useState(0);

  const openLightBox = () => {
    setIsLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setIsLightBoxOpen(false);
  };

  async function getData() {
    const imagesData = await getDataAsync(dailyJson);
    setImages(imagesData);

    const monthsData = await getDataAsync(monthsJson);
    setMonths(addImagesToMonths(monthsData, images));

    setIsLoading(false);
  }

  useEffect(() => {
    enableCrisp();
    getData().catch((error) => console.log(error));
  }, [images, months]);

  const prevDay = day - 1;
  const nextDay = day + 1;

  const getPrevDay = () => {
    setDay(prevDay);
    setLightBoxUrl(createLightBoxUrl(prevDay, images));
  };

  const getNextDay = () => {
    setDay(nextDay);
    setLightBoxUrl(createLightBoxUrl(nextDay, images));
  };

  const renderLightBox = () => {
    return (
      <Lightbox
        mainSrc={lightBoxUrl}
        nextSrc={createLightBoxUrl(day, images)}
        prevSrc={createLightBoxUrl(day, images)}
        onCloseRequest={() => closeLightBox()}
        onMovePrevRequest={() => getPrevDay()}
        onMoveNextRequest={() => getNextDay()}
        shouldAnimate
        imageTitle={`Daily #${day}`}
        imageCaption={images[prevDay].description}
      />
    );
  };

  const addImageToSlideShow = (day) => {
    setDay(day);
    setLightBoxUrl(createLightBoxUrl(day, images));
    openLightBox();
  };

  const hasLightBox = isLightBoxOpen && lightBoxUrl;
  const showImages = !isLoading && images;
  const LightBox = ({ hasLightBox }) => hasLightBox && renderLightBox();

  const Daily = ({ showImages }) => {
    return showImages ? (
      <Months months={months} callback={addImageToSlideShow} />
    ) : (
      <Loading isLoading={isLoading} />
    );
  };

  return (
    <div data-test="daily">
      <Header />
      <div className="container">
        <DailyHeader />
        <LightBox hasLightBox={hasLightBox} />
        <Daily showImages={showImages} />
      </div>
    </div>
  );
};

export default Daily;
