import React from 'react';
import axios from 'axios';

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b91d47" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <title>{siteData.title}</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getSiteData: () => ({
    title: 'Helvetic Speedrunners'
  }),

  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/gallery',
        component: 'src/containers/Gallery'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ];
  },

  webpack: (config, { stage }) => {
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry];
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry];
    }
    return config;
  },

  siteRoot: 'http://speedrun.ch/'
};
