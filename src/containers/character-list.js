import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import './character-list.css';

class CharacterList extends Component {
    handleSelectCharacter(character) {
        this.props.selectCharacter(character);
    }
    componentDidMount() {
        this.props.loadCharacter();
    }
    renderList() {
        return this.props.characters.map( (character) => {
            return (
                <li
                onClick={ ()=> this.handleSelectCharacter(character)}
                className="list-group-item"
                key={character.id}>
                {character.name}
                </li>
            );
        });
    }
    render() {
        if(this.props.characters.length === 0) {
            return <div> Loading... </div>;
        }

        return (
            <ul className="list-group character__list">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, actionCreators)(CharacterList);
