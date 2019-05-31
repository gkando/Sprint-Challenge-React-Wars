import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return (

        <div className='character-list'>
            
            {props.starwarsChars.map(item => {
                return (
                    <Character key={item.id} item={item} />
                    );
            })}
        </div>
    )
}

export default CharacterList;