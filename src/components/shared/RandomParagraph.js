import React from 'react';

const RandomParagraph = (props) => {
    const chars = "aaaaabbccdddeeeeeeffgghhhhiiiiijkklllmmnnnnoooooppqrrrrssssttttttuuvvwwxyyz";
    let outputString = '';
    for (let i = 0; i < props.sentences; i++) {
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

export default RandomParagraph;
