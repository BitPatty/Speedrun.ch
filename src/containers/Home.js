import React from 'react';
import { withSiteData } from 'react-static';

export default class extends React.Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="form-background" />
          <div className="content-container">
            <h2>
              About the <span>Helvetic Speerunners</span>
            </h2>
            <div className="left">
              <h3>Who we are</h3>
              <p>
                The Helvetic Speedrunners are a group of Speedrunners and
                Speedrun Enthusiasts within and around Switzerland. We were
                founded in May of 2018 in an attempt to unite the Swiss
                Speedrunning Community.
              </p>
              <p>
                We are a non profit organization and everyone is welcome to join
                our community. If you're interested in taking part in community
                driven events visit our public{' '}
                <a
                  target="_blank"
                  href="http://discord.me/helveticspeedrunners"
                >
                  Discord Server
                </a>
                .
              </p>
            </div>
            <div className="right">
              <h3>What we do</h3>
              <p>
                The goal of the Helvetic Speedrunners is to provide the Swiss
                Speedrunning community a platform for networking within the
                community, as well as organizing national and regional
                Speedrunning events.
              </p>
            </div>
          </div>
        </section>
        <section id="events">
          <div className="form-background" />
          <div className="content-container">
            <h2>
              <span>Events</span>
            </h2>
            <div className="full-width">TODO</div>
            <div>
              <h3>Dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>{' '}
            <div className="right">
              <h3>Dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
