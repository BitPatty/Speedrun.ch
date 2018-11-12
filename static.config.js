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
