import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { Button } from 'react-native-elements';


export default class Home extends React.Component {
  static navigationOptions = 
  {
    title: 'HOME',
  };

  render() {
    return (
    <View style={styles.containerView}>
    
      <View style={styles.boxImage}>
      <Image source = {{uri: 'https://siempus.000webhostapp.com/perpustakaan.jpg'}} style = {{width: 330, height: 220}} />
      </View>

      <View style={styles.box1}>
                
              <TouchableOpacity style={styles.button2Style} activeOpacity={0.5}
                 onPress={() => this.props.navigation.navigate('Perpus')}>
                  <Image
                  source = {{uri: 'https://siempus.000webhostapp.com/images/perpus.png'}}
                  style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> PERPUSTAKAAN</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2Style} activeOpacity={0.5}
                 onPress={() => this.props.navigation.navigate('Tambah')}>
                  <Image
                  source = {{uri: 'https://siempus.000webhostapp.com/images/addbook.png'}}
                  style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> TAMBAH BUKU</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.box2}>
              <TouchableOpacity style={styles.button2Style} activeOpacity={0.5}
                 onPress={() => this.props.navigation.navigate('coba')}>
                  <Image
                  source = {{uri: 'https://siempus.000webhostapp.com/images/pinjambuku.png'}}
                  style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> PEMINJAMAN</Text>
              </TouchableOpacity>
            </View>

    </View>
    );
  }
}