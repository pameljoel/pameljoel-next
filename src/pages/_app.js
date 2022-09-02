// external css
import '../components/crisp/crisp.scss';
import 'react-tippy/dist/tippy.css';
import 'react-image-lightbox/style.css';
import '../components/carousel/slick.scss';

// global css
import '../mixins.scss';
import '../variables.scss';
import '../index.scss';
import '../App.scss';
import '../buttons.scss';

// home page
import '../components/home/home.scss';

// daily page
import '../components/daily/daily.scss';
import '../components/daily/modal.scss';

// curriculum page
import '../components/curriculum/curriculum.scss';
import '../components/curriculum/career.scss';
import '../components/curriculum/company.scss';
import '../components/curriculum/education.scss';
import '../components/curriculum/field.scss';
import '../components/curriculum/school.scss';
import '../components/curriculum/section.scss';

// projects page
import '../components/projects/projects.scss';

// Side projects page
import '../components/SideProjects/sideProjects.scss';

// navigation
import '../components/navigation/navigation.scss';
import '../components/navigation/hamburger.scss';
import '../components/navigation/mobileNavigation.scss';
import '../components/navigation/desktopNavigation.scss';

// footer
import '../components/footer/footer.scss';

// tags
import '../components/tags/tag.scss';
import '../components/tags/tags.scss';

// skills
import '../components/skills/skills.scss';
import '../components/skills/partials/additionalInfo.scss';

// other components
import '../bigheader.scss';
import '../components/relatedProjects/relatedProjects.scss';
import '../components/buttons/closeButton.scss';
import '../components/card.scss'
import '../components/scrollTop/scrollTop.scss';
import '../components/utils/FadeIn.scss';

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
