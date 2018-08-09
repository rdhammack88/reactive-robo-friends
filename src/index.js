import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Card from './Card';
// import Cardlist from './Cardlist';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import { robots } from './robots';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
