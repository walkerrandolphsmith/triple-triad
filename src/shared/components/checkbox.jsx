import React from 'react';

export class Checkbox extends React.Component {
    render() {
        const { id, checked, onChange, onFocus, label } = this.props;
        return (
            <div className="control-group">
                <input type="checkbox" id={id}
                       checked={checked}
                       onChange={onChange}
                       onFocus={onFocus}>
                </input>
                <label htmlFor={id}></label>
                <label className="text" htmlFor={id}>{label}</label>
            </div>
        )
    }
}