import React from 'react';

export class Authentication extends React.Component {

    componentWillMount() {
        this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
        this.checkAuth();
    }

    checkAuth() {

        if(!this.props.isAuthenticated) {
            this.props.push(`/signin`)
        }
    }

    render() {
        const Component = this.props.Component;

        return (
            <Component {...this.props} />
        )
    }
}