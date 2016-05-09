import React from 'react';

export class BreadCrumb extends React.Component {
    render() {
        const { phase, phases } = this.props;
        const settingsClass = phase === phases.SETTINGS_SELECTION ? 'active' : '';
        const inviteClass = phase === phases.INVITE ? 'active' : '';
        const handClass = phase === phases.HAND_SELECTION ? 'active' : '';
        const roundClass = phase === (phases.CARD_SELECTION | phases.PIECE_SELECTION) ? 'active' : '';

        return (
            <ol className="breadcrumb">
                <li className={settingsClass}>Settings</li>
                <li className={inviteClass}>Invite</li>
                <li className={handClass}>Hand</li>
                <li className={roundClass}>Round</li>
            </ol>
        )
    }
}