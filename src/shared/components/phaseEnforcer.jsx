import React from 'react';
import { BreadCrumb } from './breadCrumb';

export class PhaseEnforcer extends React.Component {

    render() {
        const { phase, phases, componentMap } = this.props;
        const Component = componentMap[phase];

        return (
            <div>
                <BreadCrumb phase={phase} phases={phases} />
                <Component />
            </div>
        )
    }
}