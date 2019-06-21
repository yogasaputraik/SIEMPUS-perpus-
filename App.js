/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Welcome from './src/axios/AxiosWadaya';
//import Menu from './src/hmjti/Menu';
import Login from './src/siempus/login';
import Menu from './src/siempus/Menu';
import Upload from './src/latihan/upload';
//type Props = {};
//export default class App extends Component <Props> {

export default class App extends React.Component {
  render() {
    return (
      < Menu/>
    );
  }
}