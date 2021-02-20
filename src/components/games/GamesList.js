import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GamesList = (props) => {

    let gamesAPI;

    const request = require('request');

    request({ url: "https://api.boardgameatlas.com/api/search?order_by=popularity&client_id=JLBr5npPhV" } , (err, res, games) => {
        const json = JSON.parse(games);
        gamesAPI = json.games.map(e => ({id: e.id, name: e.name, playtime: e.min_playtime, published: e.year_published}));
    });

    console.log(gamesAPI);

    return (
        <Container fluid style={{height: "100vh", backgroundColor: "var(--theme-light)"}}>

        </Container>
    );
}

export default GamesList;
