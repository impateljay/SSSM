import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const style1 = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MuiThemeProvider> 
          <Tabs>
            <Tab label="Login" >
              <div align='center' justify='center'>
                <TextField floatingLabelText="Username"/><br />
                <TextField floatingLabelText="Password" type="password"/><br />
                <RaisedButton label="Login" primary={true} style={style1} />
                <RaisedButton label="Clear" secondary={true} style={style1} />
              </div>
            </Tab>
            <Tab label="Register" >
              <div align='center' justify='center'>
                <TextField floatingLabelText="Username"/><br />
                <TextField floatingLabelText="Password" type="password"/><br />
                <TextField floatingLabelText="Confirm Password" type="password"/><br />
                <RaisedButton label="Register" primary={true} style={style1} />
                <RaisedButton label="Clear" secondary={true} style={style1} />
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
