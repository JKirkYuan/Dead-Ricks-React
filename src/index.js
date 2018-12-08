import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import CharacterList from './containers/character-list';
import ActiveCharacter from './containers/active-character';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

class App extends Component {
    render() {
        return (
            <StyledContainer className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <CharacterList />
                    </div>
                    <div className="col-8">
                        <ActiveCharacter />
                    </div>
                </div>
            </StyledContainer>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
