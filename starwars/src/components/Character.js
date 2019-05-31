import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className='character-card'>
          <div className='character-card-info'>
            {props.item.name}
          </div>
          <div className='lightsaber lightsaber--yoda'>
            <div class="plasma"></div>
          </div>
      </div>
    );
  };

export default Character;
