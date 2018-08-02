import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CharacterList from './containers/character-list';
import { Provider } from 'react-redux';
import store from './store';
import ActiveCharacter from './containers/active-character';

class App extends Component {
    render() {
        return (
            <div className="container-fluid character__list__container">
                <div className="row">
                    <div className="col-4">
                        <CharacterList />
                    </div>
                    <div className="col-8">
                        <ActiveCharacter />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
