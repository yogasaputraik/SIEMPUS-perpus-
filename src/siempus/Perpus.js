import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import { Button, ListItem, SearchBar, Card, Image } from 'react-native-elements';
import axios from 'axios';


export default class Perpus extends React.Component {
  static navigationOptions = 
    {
      title: 'PERPUSTAKAAN',
    };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      buku_kode: '',

    };
  }
  componentDidMount() {
    axios.get('http://siempusbaru.000webhostapp.com/getBuku.php')
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  DeleteBuku = () => {

    fetch('http://siempusbaru.000webhostapp.com/hapusBuku.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        buku_kode: this.state.buku_kode

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
                  <Card title="Detail Buku">
                    <Image
                      source={{ uri: 'http://siempusbaru.000webhostapp.com/api/uploads/' + item.sampul + '' }}
                      style={{ width: 100, height: 130, alignItems:'center' }}
                    />
                    <Text>kode buku :{item.buku_kode}</Text>
                    <Text>Judul     :{item.buku_judul}</Text>
                    <Text>Penulis   :{item.penulis}</Text>
                    <Text>Penerbit  :{item.penerbit}</Text>
                    <Text>Sinopsis  :</Text>
                    <Text>{item.sinopsis}</Text>
                   

                    <View style={styles.boxButton}>
                      <TouchableOpacity activeOpacity={0.5}
                        style={styles.buttonEdit}
                        onPress={() => this.props.navigation.navigate('MenuBuku')}>
                      
                        <Text style={styles.txtBox2}>PINJAM</Text>

                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.5}
                        style={styles.buttonHapus}
                        onPress={() => this.DeleteBuku()}
                      >
                        <Text style={styles.txtBox2}>HAPUS</Text>
                      </TouchableOpacity>
                      <TextInput style={styles.inputs}
                        placeholder="Input Kode Buku"
                        onChangeText={(buku_kode) => this.setState({ buku_kode })} />
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