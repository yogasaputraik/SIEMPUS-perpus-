import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import { Button, ListItem, SearchBar, Card, Image } from 'react-native-elements';
import axios from 'axios';


export default class Perpus extends React.Component {
  static navigationOptions = 
    {
      title: 'PEMINJAMAN',
    };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      kode_pinjam: '',

    };
  }
  componentDidMount() {
    axios.get('http://siempusbaru.000webhostapp.com/getPinjam.php')
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  DeleteBuku = () => {

    fetch('http://siempusbaru.000webhostapp.com/hapusPinjam.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        kode_pinjam: this.state.kode_pinjam

      })

    }).then((response) => response.text())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });

    this.props.navigation.navigate('First');

  }

  // updateSearch = search => {
  //   this.setState({ search });
  // };

  render() {
    const { search } = this.state;

    return (
      <ScrollView>
        <View style={styles.containerView}>

          <SearchBar
            placeholder="Search Here..."
            onChangeText={this.updateSearch}
            value={search}
          />


          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.data}
            renderItem={({ item }) => (
              <View>

                <View>
                  <Card title="DAFTAR PEMINJAMAN">
                     <Text>Kode Peminjaman :{item.kode_pinjam}</Text>
                    <Text>kode buku :{item.buku_kode}</Text>
                    <Text>Judul :{item.buku_judul}</Text>
                    <Text>Nama Peminjam :{item.nama}</Text>
                    <Text>NIM :{item.nim}</Text>
                    <Text>Tanggal :{item.tanggal}</Text>

                    <View style={styles.boxButton}>
                   
                      <TouchableOpacity activeOpacity={0.5}
                        style={styles.buttonHapus}
                        onPress={() => this.DeleteBuku()}
                      >
                        <Text style={styles.txtBox2}>KEMBALIKAN</Text>
                      </TouchableOpacity>
                      <TextInput style={styles.inputs}
                        placeholder="Input Kode Peminjaman"
                        onChangeText={(kode_pinjam) => this.setState({ kode_pinjam })} />
                    </View>
                  </Card>

                </View>

              </View>
            )
            }
          />
        </View>

      </ScrollView>







    );
  }
}