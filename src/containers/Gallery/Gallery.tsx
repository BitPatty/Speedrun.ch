//@flow

import React from 'react';
import Header from '../../components/Header';
import { Markup } from 'interweave';
import LoadingSpinner from '../../components/LoadingSpinner';
import Error from '../../components/Error';
import useGalleries from '../../hooks/useGalleries';

//@ts-ignore
//tslint:disable-next-line
import Lightbox from 'lightbox-alex-react';

function Gallery() {
  const { isLoading, galleries, hasError } = useGalleries();

  return (
    <div>
      <Header compact={true} title="Helvetic Speedrunners" subTitle="Gallery" />
      <div>
        <div className="row">{isLoading && <LoadingSpinner />}</div>
        {!isLoading &&
          galleries &&
          galleries.map((g) => (
            <div className="row">
              <h2>
                <Markup content={g.title} />
              </h2>
              <div>
                <Markup content={g.description} />
              </div>
              <Lightbox
                galleryClasses="gallery-wrapper"
                files={g.pictures.map(
                  (c) => 'https://api.speedrun.ch/' + c.path
                )}
                thumbnails={g.pictures.map(
                  (c) => 'https://api.speedrun.ch/' + c.path
                )}
              />
            </div>
          ))}
        {!isLoading && hasError && <Error />}
      </div>
    </div>
  );
}

export default Gallery;
