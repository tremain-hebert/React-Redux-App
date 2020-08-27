import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getCharacter } from '../actions/characterActions';
import { Spinner, Card, Button, Badge } from 'react-bootstrap'

const Character = ({ getCharacter, character, isFetching }) => {
    useEffect(() => {
        getCharacter();
    }, [getCharacter]);

    if (isFetching) {
        return (
            <div className="spinner">
                <Spinner animation='border' role="status" />
            </div>
        )
    }
    
    console.log(character);

    return(
        <div className="character-div">
            <Card bg='dark' className="character-card" style={{ width: '20rem' }} >
                <Card.Img variant ='top'src={character.image} />
                <Card.Body>
                    <Card.Title>
                        <Badge variant="info">{character.name}</Badge>
                    </Card.Title>
                    <Card.Text>
                        <Badge variant='dark'>Status: 
                        <Badge variant='light'>{character.status}</Badge></Badge>
                    </Card.Text>
                    <Card.Text>
                        <Badge variant="dark">Species: {character.species}</Badge>
                    </Card.Text>
                    <Card.Text>
                        <Badge variant='dark'>Gender: {character.gender}</Badge>
                    </Card.Text>
                    <Button variant="primary" onClick={getCharacter}>
                            Get New Character
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { character: state.character, isFetching: state.isFetching };
};

const mapDispatchToProps = { getCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(Character);