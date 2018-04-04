import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RootComponent = () => (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );

ReactDOM.render(<RootComponent />, document.getElementById('root'));
unregister();
