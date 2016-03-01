import React from 'react';

export const DumbUser = (username, resendVerificationEmail, message, signOut) => (
    <div id="user">
        <div>
            <img heigth="150px" width="150px" src="assets/images/default-user.png"/>
            <div id="username">{username}</div>
            <div>{resendVerificationEmail}</div>
            {message}
            <button className="btn btn-main" onClick={signOut}>SignOut</button>
        </div>
    </div>
);