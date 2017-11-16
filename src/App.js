import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import fire from './fire';

const style1 = {
  margin: 12,
};

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      emailError:'',
      password:'',
      passwordError:'',
      emailRegister:'',
      emailRegisterError:'',
      passwordRegister:'',
      passwordRegisterError:'',
      confirmPasswordRegister:'',
      confirmPasswordRegisterError:'',
      loginStatus:'',
      registerStatus:'',
      open:false,
      openRegister:false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleOpenRegister = this.handleOpenRegister.bind(this);
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleOpen = () => {
    if (this.state.email.length <= 0) {
      this.setState({emailError: 'A valid email is required'})
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({emailError: 'A valid email is required'})
    } else{
      this.setState({emailError: ''})
    }
    if (this.state.password.length <= 0) {
      this.setState({passwordError: 'A password is required'})
    } else if (this.state.password.length <= 5) {
      this.setState({passwordError: 'Password must be at least 6 characters'})
    } else{
      this.setState({passwordError: ''})
    }
    if (this.state.email.length > 0 && this.validateEmail(this.state.email) && this.state.password.length > 5) {
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
          this.setState({loginStatus: 'success'})
        }.bind(this)).catch(function(error) {
          this.setState({loginStatus: error.code})
        }.bind(this));
        this.setState({open: true});
      }
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleClear = () => {
    this.setState({email:''})
    this.setState({password:''})
  }
  handleOpenRegister = () => {
    if (this.state.emailRegister.length <= 0) {
      this.setState({emailRegisterError: 'A valid email is required'})
    } else if (!this.validateEmail(this.state.emailRegister)) {
      this.setState({emailRegisterError: 'A valid email is required'})
    } else{
      this.setState({emailRegisterError: ''})
    }
    if (this.state.passwordRegister.length <= 0) {
      this.setState({passwordRegisterError: 'A password is required'})
    } else if (this.state.passwordRegister.length <= 5) {
      this.setState({passwordRegisterError: 'Password must be at least 6 characters'})
    } else if (this.state.passwordRegister !== this.state.confirmPasswordRegister) {
      this.setState({passwordRegisterError: 'Does not match with confirm password'})
    } else{
      this.setState({passwordRegisterError: ''})
    }
    if (this.state.confirmPasswordRegister.length <= 0) {
      this.setState({confirmPasswordRegisterError: 'A confirm password is required'})
    } else if (this.state.passwordRegister !== this.state.confirmPasswordRegister) {
      this.setState({confirmPasswordRegisterError: 'Does not match with password'})
    } else{
      this.setState({confirmPasswordRegisterError: ''})
    }
    if (this.state.emailRegister.length > 0 && this.validateEmail(this.state.emailRegister) && this.state.passwordRegister.length > 5 && this.state.confirmPasswordRegister.length > 5 && this.state.passwordRegister === this.state.confirmPasswordRegister) {
      fire.auth().createUserWithEmailAndPassword(this.state.emailRegister, this.state.passwordRegister).then(function(user) {
        this.setState({registerStatus: 'success'})
      }.bind(this)).catch(function(error) {
        this.setState({registerStatus: error.code})
      }.bind(this));
      this.setState({openRegister: true});
    }
  };
  handleCloseRegister = () => {
    this.setState({openRegister: false});
  };
  handleClearRegister = () => {
    this.setState({emailRegister:''})
    this.setState({passwordRegister:''})
    this.setState({confirmPasswordRegister:''})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SSSM</h1>
        </header>
        <MuiThemeProvider> 
          <Tabs>
            <Tab label="Login" >
              <div align='center' justify='center'>
                <TextField floatingLabelText="Email" value={this.state.email} errorText={this.state.emailError} onChange = {(event,newValue) => this.setState({email:newValue})}/><br />
                <TextField floatingLabelText="Password" value={this.state.password} errorText={this.state.passwordError} type="password" onChange = {(event,newValue) => this.setState({password:newValue})}/><br />
                <RaisedButton label="Login" primary={true} style={style1} onClick={this.handleOpen}/>
                <RaisedButton label="Clear" secondary={true} style={style1} onClick={this.handleClear}/>
                <Dialog title="SSSM" modal={false} open={this.state.open} onRequestClose={this.handleClose}> Email : {this.state.email}<br/>Password : {this.state.password}<br/>status : {this.state.loginStatus}<br/></Dialog>
              </div>
            </Tab>
            <Tab label="Register" >
              <div align='center' justify='center'>
                <TextField floatingLabelText="Email" value={this.state.emailRegister} errorText={this.state.emailRegisterError} onChange = {(event,newValue) => this.setState({emailRegister:newValue})}/><br />
                <TextField floatingLabelText="Password" type="password" value={this.state.passwordRegister} errorText={this.state.passwordRegisterError} onChange = {(event,newValue) => this.setState({passwordRegister:newValue})}/><br />
                <TextField floatingLabelText="Confirm Password" type="password" value={this.state.confirmPasswordRegister} errorText={this.state.confirmPasswordRegisterError} onChange = {(event,newValue) => this.setState({confirmPasswordRegister:newValue})}/><br />
                <RaisedButton label="Register" primary={true} style={style1} onClick={this.handleOpenRegister}/>
                <RaisedButton label="Clear" secondary={true} style={style1} onClick={this.handleClearRegister}/>
                <Dialog title="SSSM" modal={false} open={this.state.openRegister} onRequestClose={this.handleCloseRegister}> Email : {this.state.emailRegister}<br/>Password : {this.state.passwordRegister}<br/>Confirm Password : {this.state.confirmPasswordRegister}<br/>status : {this.state.registerStatus}<br/></Dialog>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
