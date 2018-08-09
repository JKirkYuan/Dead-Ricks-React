import React from 'react';

const CharacterListItem = ({character, handleSelectCharacter}) => {
    return (
        <li
        onClick={ ()=> handleSelectCharacter(character)}
        className="list-group-item">
        {character.name}
        </li>
    );
}

export default CharacterListItem;
