import React from './pages/MainPage/node_modules/react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import store from './store/store';
import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>       
    </Provider>,
    document.getElementById('root')
);
