//import '../styles/globals.css'

import './src/mixins.scss';
import './src/variables.scss';
import './src/components/curriculum/curriculum.scss';
import './src/components/curriculum/career.scss';
import './src/components/curriculum/company.scss';
import './src/components/curriculum/education.scss';
import './src/components/curriculum/field.scss';
import './src/components/curriculum/school.scss';
import './src/components/curriculum/section.scss';

import './src/components/relatedProjects/relatedProjects.scss';

import './src/components/tags/tag.scss';
import './src/components/tags/tags.scss';

import './src/index.scss';
import './src/App.scss';
import './src/bigheader.scss';
import './src/buttons.scss';
import './src/components/buttons/closeButton.scss';

import './src/components/card.scss'

import './src/components/crisp/crisp.scss';

import './src/components/skills/skills.scss'
import './src/components/skills/partials/additionalInfo.scss'
import './src/components/home/home.scss'
import './src/components/scrollTop/scrollTop.scss'
import './src/components/utils/FadeIn.scss'
import './src/components/navigation/navigation.scss';
import './src/components/navigation/hamburger.scss';
import './src/components/navigation/mobileNavigation.scss';
import './src/components/navigation/desktopNavigation.scss';

import 'react-image-lightbox/style.css';
import './src/components/daily/daily.scss';
import './src/components/daily/modal.scss';

import Navigation from "./src/components/navigation/Navigation";
import ScrollTop from "./src/components/scrollTop/ScrollTop";

function MyApp({ Component, pageProps }) {
  return <>
    <Navigation />
    <ScrollTop />
    <Component {...pageProps} />
    </>
}

export default MyApp
