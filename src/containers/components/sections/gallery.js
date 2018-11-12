import React from 'react';
import Gallery from 'react-photo-gallery';

export default class extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}
const PHOTO_SET = [
  {
    src: '/img/hsm1_gp.jpg',
    width: 4048,
    height: 2210
  },
  {
    src: '/img/hsm1_0.jpg',
    width: 1920,
    height: 1280
  },
  {
    src: '/img/hsm1_1.jpg',
    width: 1280,
    height: 1920
  },
  {
    src: '/img/hsm1_2.jpg',
    width: 1920,
    height: 1280
  },
  {
    src: '/img/hsm1_3.jpg',
    width: 1920,
    height: 1280
  },
  {
    src: '/img/hsm1_4.jpg',
    width: 1920,
    height: 1280
  }
];
