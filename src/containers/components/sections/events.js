import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <section id="events">
        <div className="content-container">
          <h2>
            <span>Events</span>
          </h2>
          <div className="full-width">
            <div className="left">
              <h3>Upcoming Events</h3>
              <p>
                The next event is gonna be from Nov 23th to 4th at{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://herofest.ch/herofest.aspx"
                >
                  Herofest
                </a>{' '}
                in Bern.
              </p>
            </div>
            <div className="right">
              <h3>Past Events</h3>
              <p>
                The VODs of the past Helvetic Speedrunners Marathons can be found on{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitch.tv/helveticspeedrunners"
                >
                  Twitch
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
