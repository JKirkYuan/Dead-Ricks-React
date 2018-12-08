import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 50%;
    display: flex;
    align-self: center;
    margin-top: 1em;
`;

class ActiveCharacter extends Component {
    episodeList() {
        return this.props.character.episode.map((ep) => {
            let epNum = ep.replace(/\D/g, '');
            return(
                <li key={epNum} className="list-group-item">Episode: {epNum}</li>
            );
        })
    }
    render() {
        if (!this.props.character) {
            return <div> Select a character </div>
        }
        return(
            <div className="card active__character">
                <StyledImage className="card-img-top" src={this.props.character.image} alt={this.props.character.name} />
                <div className="card-body">
                    <h3 className="card-title">{this.props.character.name}</h3>
                    <p className="card-text">Species: {this.props.character.species}</p>
                    <p className="card-text">Location: {this.props.character.location.name}</p>
                    <h5 className="card-text">Appears on Episodes</h5>
                    <ul className="list-group">
                        {this.episodeList()}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        character: state.character
    }
}

export default connect(mapStateToProps)(ActiveCharacter);
