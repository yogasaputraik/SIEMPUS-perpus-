import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
//import Header from "./Header";
import styles from "./style";
import { Button } from 'react-native-elements';

export default class Pinjam extends React.Component {

  render() {
    return (
    <View style={styles.containerView}>
    <View style={styles.ScreenContainer}>
    
    <View style={styles.boxIsiBuku}>
                
              <TouchableOpacity style={styles.boxBuku} activeOpacity={0.5}
                 onPress={() => this.props.navigation.navigate('Perpus')}>
                  <Image
                  source = {{uri: 'https://about.canva.com/wp-content/uploads/sites/3/2017/12/canva-starry-night-illustration-book-cover-MACAg6OlqBM.jpg'}}
                  style={styles.ImageBuku}
                  />
                  <View style={styles.SeparatorTidur}></View>
                  
                  <Text> Judul Buku :</Text>
                  <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Kembalikan"
                    />
                        
              
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxBuku} activeOpacity={0.5}
                 onPress={() => this.props.navigation.navigate('Tambah')}>
                  <Image
                  source = {{uri: 'https://about.canva.com/wp-content/uploads/sites/3/2017/12/canva-starry-night-illustration-book-cover-MACAg6OlqBM.jpg'}}
                  style={styles.ImageBuku}
                  />
                  <View style={styles.SeparatorTidur}></View>
                  <Text> Judul Buku :</Text>
                  <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Kembalikan"
                    />
                        
              </TouchableOpacity>

            </View>
           

     </View>
    </View>

    );
  }
}