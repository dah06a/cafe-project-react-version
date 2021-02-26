import React from 'react';
import Landing from '../shared/Landing';
import GamesList from './GamesList';
import PlayGameSection from './PlayGameSection';

const Games = (props) => {
    return (
        <React.Fragment>
            <Landing title="Games" image="classic-pieces.jpg" />
            <GamesList />
            <PlayGameSection />
        </React.Fragment>
    );
}

export default Games;
