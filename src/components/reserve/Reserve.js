import React from 'react';
import Landing from '../shared/Landing';
import ReserveForm from './ReserveForm';

const Reserve = (props) => {
    return(
        <React.Fragment>
            <Landing title="Reserve" image="found-favorite-game.jpg" />
            <ReserveForm />
        </React.Fragment>
    );
}

export default Reserve;
