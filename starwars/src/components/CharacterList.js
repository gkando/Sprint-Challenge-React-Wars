import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return (
        <div className='character-list'>
            {props.starwarsChars.map((item,index) => {
                return (
                    <Character key={index} item={item} />
                    );
            })}
        </div>
    )
}

export default CharacterList;