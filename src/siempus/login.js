import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, TouchableHighlight,Alert, KeyboardAvoidingView, Image} from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

  };
}
Login= () =>{
  if(this.state.username == 'Admin' && this.state.password == 'admin'){
    this.props.navigation.navigate('Home')
  }else{
    Alert.alert('Masukan Username dan Password yang Benar!!!');
}
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
         
          <Image 
                source={{uri: 'https://siempus.000webhostapp.com/images/logo.png'}}
                style={{ width: 250, height: 90, marginBottom: 30, marginTop: 50}} />
            <Text style={styles.JustText}>Login To Access Your Account </Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
             onChangeText={username => this.setState({ username})} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
             secureTextEntry={true} onChangeText={password => this.setState({ password })}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.Login()}
              title="Login"
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
