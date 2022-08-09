import React from 'react';
import Logo from './Logo';
function WelcomeScreen({play_game}) {
  return (
    <div id="modal_bg">
        <Logo />

        <h1 id="title_msg">
          Welcome to <br />
          Who Wants To Be A Developer?
        </h1>
        <button
          id="play"
          className="welcome_btns"
          onClick={() => {
            play_game();
          }}
        >
          Play
        </button>
        <button id="help" className="welcome_btns">
          Help
        </button>
    </div>
  )
}

export default WelcomeScreen;