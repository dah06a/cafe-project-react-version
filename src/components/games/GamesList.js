import React, { Component } from 'react';
import { Container, Row, Col, Table, Image, OverlayTrigger, Popover, PopoverTitle, PopoverContent, Button } from 'react-bootstrap';

class GamesList extends Component {

    state = {
        gameList: []
    }

    componentDidMount() {
        fetch("https://api.boardgameatlas.com/api/search?order_by=popularity&client_id=JLBr5npPhV")
            .then(response => response.json())
            .then(gamesObj => {
                console.log(gamesObj);
                this.setState({gameList: gamesObj.games})
            });
    }


    render() {

        const gameList = this.state.gameList.map((game, i) => {
            let gameTitle = game.name;
            if (gameTitle.length > 30) gameTitle = gameTitle.slice(0, 30) + "...";

            let description = game.description_preview.length === 0 ? "Sorry - no description available" : game.description_preview;

            const gameDescription = <OverlayTrigger trigger={['click', 'focus']} placement="auto" overlay={
                <Popover>
                    <PopoverTitle>{game.name}</PopoverTitle>
                    <PopoverContent>
                        {description}
                    </PopoverContent>
                </Popover>
            }>
                <p style={{cursor: "pointer"}}>{description.slice(0, 50)} ...</p>
            </OverlayTrigger>

            let gameNum = Math.floor(Math.random()*8);
            let gameNumVariant = "success";
            if (gameNum === 1) gameNumVariant = "warning";
            if (gameNum === 0) gameNumVariant = "danger";

            return (
                <tr key={game.id}>
                    <td>{i + 1}</td>
                    <td className="text-center"><Image src={game.images.thumb} alt="Game Thumbnail" fluid /></td>
                    <td>{gameTitle}</td>
                    <td>{gameDescription}</td>
                    <td className="text-center">
                        <Button
                            size="sm"
                            variant={gameNumVariant}
                            disabled={!gameNum}
                            onClick={() => alert("This will definitely do something later!")}
                            >{gameNum} Reserve?
                        </Button>
                    </td>
                </tr>
            );
        })

        return(
            <Container fluid style={{backgroundColor: "var(--theme-dark)", color: "var(--theme-light"}}>
                <Row>
                    <Col className="m-3">
                        <h1 className=" text-center theme-font">Game List</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} md={10} lg={8}>
                        <Table striped bordered hover responsive="lg" style={{backgroundColor: "var(--theme-secondary)"}}>
                            <thead>
                                <tr>
                                    <th width="5%">#</th>
                                    <th width="5%">Game</th>
                                    <th width="35%">Title</th>
                                    <th width="45%">Description</th>
                                    <th width="10%">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameList}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }



}

export default GamesList;
