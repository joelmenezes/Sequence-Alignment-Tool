import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      fullName:'',
      email:'',
      password:'',
      verifyPassword:''
    }
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:4200/api/";
    console.log("values",this.state.fullName,this.state.email,this.state.password,this.state.verifyPassword);
    //To be done:check for empty values before hitting submit
    var payload={
    "fullName": this.state.fullName,
    "email":this.state.email,
    "password":this.state.password,
    "verifyPassword":this.state.verifyPassword
    }
    console.log(payload);
    axios.post(apiBaseUrl+'register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      console.log("registration successfull");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your full name"
             floatingLabelText="Full Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Re-enter your Password"
             floatingLabelText="Re-enter Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;