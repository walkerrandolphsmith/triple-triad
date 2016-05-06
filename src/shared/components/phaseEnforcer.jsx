import React from 'react';
import { BreadCrumb } from './breadCrumb';

export class PhaseEnforcer extends React.Component {

    render() {
        const { rollupPhase, phases, componentMap } = this.props;
        const Component = componentMap[rollupPhase];

        return (
            <div>
                <BreadCrumb phase={rollupPhase} phases={phases} />
                <Component />
            </div>
        )
    }
}