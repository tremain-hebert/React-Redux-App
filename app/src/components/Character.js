import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getCharacter } from '../actions/characterActions';

const Character = ({ getCharacter, character, isFetching }) => {
    useEffect(() => {
        getCharacter();
    }, [getCharacter]);

    if (isFetching) {
        return <h2>Loading...</h2>;
    }
    
    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} />
            <h2>{character.status}</h2>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <button onClick={getCharacter}>Get New Character</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { character: state.character, isFetching: state.isFetching };
};

const mapDispatchToProps = { getCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(Character);