import React from 'react';
import Landing from '../shared/Landing';
import GamesList from './GamesList';

const Games = (props) => {
    return (
        <React.Fragment>
            <Landing title="Games" image="classic-pieces.jpg" />
            <GamesList />
        </React.Fragment>
    );
}

export default Games;
