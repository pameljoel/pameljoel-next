import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Head from "next/head";

function SEO({ description: descriptionDefault, lang, meta, keywords, title: titleDefault }) {
  const title = titleDefault ? titleDefault : "Pamel Joel Beltrè - Front end Developer & Designer - React, AngularJS, JavaScript, CSS3, HTML5 projects";
  const description = descriptionDefault ? descriptionDefault :  "I am a Front end Developer & Designer, I specialize in UI/UX Design and JavaScript development with React / AngularJS";

  return <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="generator" content="Next.JS 12" />
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@pameljoel" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <link crossOrigin="" href="https://www.google.com/" rel="preconnect" />
    <link crossOrigin="" href="https://www.google-analytics.com" rel="preconnect" />
    <link crossOrigin="" href="https://www.google.it" rel="preconnect" />

    <link rel="icon" href="/favicon-32x32.png" type="image/png" />
    <meta name="theme-color" content="#12b5fc" />
    <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="96x96" href="/images/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/icon-128x128.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="192x192" href="/images/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="384x384" href="/images/icons/icon-384x384.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/images/icons/icon-512x512.png" />
  </Head>;
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
