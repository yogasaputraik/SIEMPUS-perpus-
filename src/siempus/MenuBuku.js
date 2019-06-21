import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
//import Header from "./Header";
import styles from "./style";
import { Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import axios from 'axios';


export default class MenuBuku extends React.Component {
  static navigationOptions =
    {
      title: 'PINJAM BUKU',
    };

  constructor() {
    super();

    this.state = { kode_pinjam: '', buku_kode: '', buku_judul: '', kategori_id: '', nama: '', nim: '', tanggal: '', loading: false, disabled: false }
  }

  saveData = () => {
    this.setState({ loading: true, disabled: true }, () => {
      fetch('http://siempusbaru.000webhostapp.com/tambahPeminjam.php',
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              kode_pinjam: this.state.kode_pinjam,
              buku_kode: this.state.buku_kode,
              buku_judul: this.state.buku_judul,
              kategori_id: this.state.kategori_id,
              nama: this.state.nama,
              nim: this.state.nim,
              tanggal: this.state.tanggal
            })

        }).then((response) => response.text()).then((responseJson) => {
          alert(responseJson);
          this.setState({ loading: false, disabled: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
    });
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.containerView}>
        <View style={styles.ScreenContainer}>
          <View style={styles.boxIsiBuku}>
            
            
              <Image
                source={{ uri: 'https://siempus.000webhostapp.com/images/pinjambuku.png' }}
                style={styles.ImageIconStyle}
              />
              <Text style={styles.TextStyle}> PEMINJAMAN</Text>
            
          </View>


          <View style={styles.loginFormView}>
            <Text>Kode Pinjam :</Text>
            <TextInput placeholder="Kode Pinjam" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(kode_pinjam) => this.setState({ kode_pinjam })} />
            <Text>Judul Buku :</Text>
            <TextInput placeholder="Judul Buku" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(buku_judul) => this.setState({ buku_judul })} />
            <Text>Kode Buku :</Text>
            <TextInput placeholder="Buku_Kode" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(buku_kode) => this.setState({ buku_kode })} />
            <Text>Nama Peminjam:</Text>
            <TextInput placeholder="Nama" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(nama) => this.setState({ nama })} />

            <Text>NIM Peminjam :</Text>
            <TextInput placeholder="NIM" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(nim) => this.setState({ nim })} />
            <Text>Tanggal Pinjam :</Text>
            <TextInput placeholder="yyyy-mm-dd" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(tanggal) => this.setState({ tanggal })} />

            <Text>Kategori ID :</Text>
            <TextInput placeholder="Kategori" placeholderColor="#c4c3cb" style={styles.TextInput1}
              onChangeText={(kategori_id) => this.setState({ kategori_id })} />

            <TouchableOpacity activeOpacity={0.5}
              style={styles.buttonEdit}
              onPress={() => this.saveData()}
            >
              <Text style={styles.txtBox2}>PINJAM</Text>

            </TouchableOpacity>
          </View>



        </View>

      </View>
      </ScrollView>

    );
  }
}