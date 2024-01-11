import React from 'react';
import './style.css';

export const LiveChatCTA = (): JSX.Element => {
    return (
        <div className="live-chat-CTA">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <p className="heading">Join the live chat now!</p>
                        <p className="text">Discuss ongoing matches with other football fans.</p>
                    </div>
                </div>
                <div className="actions">
                    <button className="style-primary-small">
                        <a className="button" href="/chat">Join</a>
                    </button>
                </div>
            </div>
        </div>
    );
};