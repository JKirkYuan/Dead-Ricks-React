import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledItem = styled.li`
    z-index: 2;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    font-size: 1rem;
    line-height: 1.5rem;
`;
class CharacterListItem extends Component {

    handleClick(character) {
        this.props.handleSelectCharacter(character);
    }

    render() {
        if (this.props.clickedCharacter === this.props.character) {
            return (
                <StyledItem
                onClick={ ()=> this.handleClick(this.props.character)}
                className="list-group-item">
                    {this.props.character.name}
                </StyledItem>
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
