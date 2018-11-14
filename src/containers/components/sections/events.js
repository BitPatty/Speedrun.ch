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
                The next event is gonna be from Jan 4th to 6t at{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.eevent.ch"
                >
                  E-Event
                </a>{' '}
                in St. Gallen.
              </p>
              <p>
                You can submit your runs over{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/forms/oibrZUj2e5cxqyRC2"
                >
                  this form!
                </a>{' '}
                Submissions are open until Nov 26th.
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
