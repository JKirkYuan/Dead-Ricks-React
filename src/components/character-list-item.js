import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterListItem extends Component {

    handleClick(character) {
        this.props.handleSelectCharacter(character);
    }

    render() {
        if (this.props.clickedCharacter === this.props.character) {
            return (
                <li
                onClick={ ()=> this.handleClick(this.props.character)}
                className="list-group-item active">
                    {this.props.character.name}
                </li>
            );
        }
        return (
            <li
            onClick={ ()=> this.handleClick(this.props.character)}
            className="list-group-item">
                {this.props.character.name}
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickedCharacter: state.character,
    }
};

export default connect(mapStateToProps)(CharacterListItem);
