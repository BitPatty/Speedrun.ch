import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="content-container">
          <h2>
            About the <span>Helvetic Speerunners</span>
          </h2>
          <div className="full-width">
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
                driven events join our public{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div className="full-width">
            <h3>Where you can find us</h3>
            <div className="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitch.tv/helveticspeedrunners"
              >
                Twitch
              </a>{' '}
              |{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/swissspeedruns"
              >
                Twitter
              </a>{' '}
              |{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.me/helveticspeedrunners"
              >
                Discord
              </a>{' '}
              |{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.speedrun.com/Helvetic_Speedrunners_Marathon/forum"
              >
                SRC Forums
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
