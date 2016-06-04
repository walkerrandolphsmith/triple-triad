import React from 'react';
import { Hold } from './hold';

export class InvitationHold extends React.Component {
    render() {
        return (
            <Hold>
                <p>Waiting to opponent to accept the game...</p>
            </Hold>
        )
    }
}
