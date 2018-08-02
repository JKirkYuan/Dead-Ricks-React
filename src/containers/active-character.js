import React, {Component} from 'react';
import './active-character.css';

class ActiveCharacter extends Component {
    render() {
        return(
            <div className="card active__character">
                <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default ActiveCharacter;
