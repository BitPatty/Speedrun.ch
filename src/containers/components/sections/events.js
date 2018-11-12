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
                The decision on the next event data has not been made yet. Join
                our Discord to get regular status updates!
              </p>
            </div>
            <div className="right">
              <h3>Last Event</h3>
              <p>
                The VODs of the Helvetic Speedrunners Marathon (Aug 04 - Aug 06
                2018) can be found on{' '}
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
