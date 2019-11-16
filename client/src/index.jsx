import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index.js';
import Root from './Root.jsx';

const store = createStore(rootReducer);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
