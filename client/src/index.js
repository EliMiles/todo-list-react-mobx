import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppRouter from './AppRouter';


ReactDOM.render(
    <Provider><AppRouter /></Provider>,
    document.querySelector('#root')
);
