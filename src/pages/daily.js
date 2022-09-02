import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Daily from '../components/daily/Daily';
import { server } from "../helpers";

const DailyPage = ({ daily, months }) => (
  <Fragment>
    <SEO title="Daily doodles - Pamel Joel Beltrè - Front End Developer & Designer - React, AngularJS, Webpack" />
    <Daily { ...{ daily, months } } />
  </Fragment>
);

export async function getServerSideProps () {
  const daily = await fetch(`${server}/api/daily`);
  const months = await fetch(`${server}/api/months`);

  const dailyJson = await daily.json();
  const monthsJson = await months.json();

  return {
    props: {
      daily: dailyJson,
      months: monthsJson,
    }
  }
}

export default DailyPage;
