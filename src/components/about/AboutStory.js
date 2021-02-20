import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const randomParagraphGenerator = (sentences) => {
    const chars = "aaaaabbccdddeeeeeeffgghhhhiiiiijkklllmmnnnnoooooppqrrrrssssttttttuuvvwwxyyz";
    let outputString = '';
    for (let i = 0; i < sentences; i++) {
        outputString += chars[Math.floor(Math.random() * chars.length)].toUpperCase();
        const sentenceLength = Math.floor(Math.random() * 30);
        for (let j = 0; j < sentenceLength; j++) {
            const wordLength = Math.floor(Math.random() * 10);
            for (let k = 0; k < wordLength; k++) {
                outputString += chars[Math.floor(Math.random() * chars.length)];
            }
            if (j+1 < sentenceLength) outputString += ' ';
        }
        outputString += '. ';
    }
    return outputString;
}

const AboutStory = (props) => {
    return (
        <Container fluid className="about-story">
            <Row className="h-100 align-items-center">
                <Col md={10} className="mx-auto">
                    <h2 className="text-center mb-5">The Story</h2>
                    <p>{randomParagraphGenerator(15)}</p>
                    <p>{randomParagraphGenerator(15)}</p>
                    <p>{randomParagraphGenerator(15)}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutStory;
