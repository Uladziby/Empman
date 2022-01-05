import React from "react";
import ReactDom from "react-dom";
import Application from "./src/Application";

import { Provider } from 'react-redux'
import {store} from './src/redux/store';

ReactDom.render(
<Provider store = {store}>
<React.StrictMode>
    <Application />
  </React.StrictMode>
</Provider>
,document.getElementById('root'));
