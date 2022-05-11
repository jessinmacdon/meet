import React from "react";

import "./WelcomeScreen.css";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ? (
        <div className="bgimg">

            <div className="middleText">
                <h1 className="h1">Welcome to MEET</h1>
            </div>
            <div className="transbox bottomText">
                <p>Login to see upcoming events</p>
            </div>
            <div className="google-btn-position">
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google logo"
                        />
                    </div>

                    <p
                        className="btn-text"
                        onClick={() => {
                            props.getAccessToken();
                        }}
                        rel="nofollow noopener"
                    >
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>
        </div>
    ) : null;
}

export default WelcomeScreen;