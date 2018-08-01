import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CharacterList from './containers/character-list';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <div>
                <CharacterList />
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
