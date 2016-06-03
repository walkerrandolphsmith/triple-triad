import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AcceptInvitation } from './../components';
import { endPhaseInvitationHold } from './../ducks/game';

function mapStateToProps(state) {
    const invitationToken = state.routing.locationBeforeTransitions.pathname.split('accept-invitation/')[1];
    const gameId = invitationToken.substring(0, 20);
    const gameOwner = invitationToken.substring(20, invitationToken.length);
    return {
        gameId: gameId,
        gameOwner: gameOwner,
        invitationToken: invitationToken
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhaseInvitationHold }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AcceptInvitation);