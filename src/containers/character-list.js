import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import CharacterListItem from './character-list-item';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 };
        this.handleSelectCharacter = this.handleSelectCharacter.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
    }

    handleSelectCharacter(character) {
        this.props.selectCharacter(character);
    }
    componentDidMount() {
        this.props.loadCharacterList(this.state.page);
    }
    handleNextPageClick() {
        this.setState({page: this.state.page + 1}, () => this.props.loadCharacterList(this.state.page));
    }

    renderList() {
        return this.props.characters.map((character, index) => {
            return (
                <CharacterListItem
                    handleSelectCharacter={this.handleSelectCharacter}
                    key={character.id} 
                    character={character}
                />
            );
        });
    }
    render() {
        if(this.props.characters.length === 0) {
            return <div> Loading... </div>;
        }
        return (
            <React.Fragment>
                <ul className="list-group character__list">
                    {this.renderList()}
                </ul>
                <StyledButton onClick={this.handleNextPageClick}>Next Page</StyledButton>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, actionCreators)(CharacterList);
