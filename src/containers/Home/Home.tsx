import React from 'react';
import Header from '../../components/Header';
import { Markup } from 'interweave';
import LoadingSpinner from '../../components/LoadingSpinner';
import useSingletons from '../../hooks/useSingletons';
import { SingletonComponent } from '../../services/singletonService';
import Error from '../../components/Error';
import Dynamic from '../../components/Dynamic';

function Home() {
  const { isLoading, singletons, hasError } = useSingletons([
    'about',
    'events',
  ]);

  return (
    <div>
      <Header
        title="Helvetic Speedrunners"
        subTitle="The Swiss Speedrunning Community"
        link="/#events"
        linkText="View our events"
      />
      <div>
        <div className="row">{isLoading && <LoadingSpinner />}</div>
        {!isLoading && singletons && (
          <>
            <div className="row">
              <h2>
                <Markup content={singletons.about.title} />
              </h2>
              {singletons.about.content?.map(
                (c: SingletonComponent, index: number) => (
                  <Dynamic key={index} identifier={index} content={c} />
                )
              )}
            </div>
            <div className="row">
              <h2>
                <Markup content={singletons.events.title} />
              </h2>
              {singletons.events.content?.map(
                (c: SingletonComponent, index: number) => (
                  <Dynamic key={index} identifier={index} content={c} />
                )
              )}
            </div>
          </>
        )}
        {!isLoading && hasError && <Error />}
      </div>
    </div>
  );
}

export default Home;
