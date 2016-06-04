import React from 'react';
import { Hold } from './hold';

export class HandSelectionHold extends React.Component {
    render() {
        return (
            <Hold>
                <p>Waiting for opponent to select their hand...</p>
            </Hold>
        )
    }
}
