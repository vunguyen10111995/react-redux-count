import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, document.getElementById('root'))
registerServiceWorker();
