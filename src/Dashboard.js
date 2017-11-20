import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import fire from './fire';
import { Switch, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider> 
            <h1>Welcome</h1>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Dashboard;
