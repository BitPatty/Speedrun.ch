import React from 'react';
import { Link } from 'react-static';

export default class extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div>Copyright © 2018 Helvetic Speedrunners Association </div>
          <div>
            <a target="_blank" href="/files/statutes.pdf">
              Statutes
            </a>{' '}
            | <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    );
  }
}
