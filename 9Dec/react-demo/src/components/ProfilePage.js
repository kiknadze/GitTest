import React, { Component } from 'react';

export const ProfilePage = props => {
    return (
        <div className="profile">
            <h1 className="profile--title">{localStorage.getItem('authorized')}</h1>
        </div>
    )
}