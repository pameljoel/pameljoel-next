//import '../styles/globals.css'

import '../mixins.scss';
import '../variables.scss';
import '../components/curriculum/curriculum.scss';
import '../components/curriculum/career.scss';
import '../components/curriculum/company.scss';
import '../components/curriculum/education.scss';
import '../components/curriculum/field.scss';
import '../components/curriculum/school.scss';
import '../components/curriculum/section.scss';
import '../components/footer/footer.scss';

import '../components/relatedProjects/relatedProjects.scss';

import '../components/tags/tag.scss';
import '../components/tags/tags.scss';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';
import '../buttons.scss';
import '../components/buttons/closeButton.scss';

import '../components/card.scss'

import '../components/crisp/crisp.scss';
import 'react-tippy/dist/tippy.css';

import '../components/skills/skills.scss'
import '../components/skills/partials/additionalInfo.scss'
import '../components/home/home.scss'
import '../components/scrollTop/scrollTop.scss'
import '../components/utils/FadeIn.scss'
import '../components/navigation/navigation.scss';
import '../components/navigation/hamburger.scss';
import '../components/navigation/mobileNavigation.scss';
import '../components/navigation/desktopNavigation.scss';

import 'react-image-lightbox/style.css';
import '../components/daily/daily.scss';
import '../components/daily/modal.scss';

import '../components/projects/projects.scss';
import '../components/carousel/slick.scss';

import Navigation from "../components/navigation/Navigation";
import ScrollTop from "../components/scrollTop/ScrollTop";
import Footer from "../components/footer/Footer";
import { AppWrapper } from '../context/state';

function App({Component, pageProps}) {
    return (
        <AppWrapper>
            <Navigation/>
            <ScrollTop/>
            <Component {...pageProps} />
            <Footer/>
        </AppWrapper>
    )
}

export default App;
