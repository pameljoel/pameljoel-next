import React, { Fragment } from 'react';
import SEO from './src/components/seo';
import Daily from './src/components/daily/Daily';

const DailyPage = () => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
    <Daily />
  </Fragment>
);
export default DailyPage;
