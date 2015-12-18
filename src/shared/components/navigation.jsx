import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <ul>
                    <li>
                        <Link to="/game">
                            Game
                        </Link>
                    </li>
                    <li>
                        <Link to="/deck">
                        Deck
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                        Settings
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
