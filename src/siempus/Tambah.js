import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ActivityIndicator, ScrollView} from 'react-native';
//import Header from "./Header";
import styles from "./style";
import { Button } from 'react-native-elements';

const axios = require('axios');
export default class Tambah extends React.Component {
    static navigationOptions = 
  {
    title: 'TAMBAH BUKU',
  };

    constructor(props) {
        super(props);
        this.state = {
            srcImg: '',
            uri: '',
            fileName: '',
            loading: false,
            buku_kode: '',
            buku_judul: '',
            penulis: '',
            penerbit: '',
            sinopsis: '',
            image: '',
            kategori_id: '',
            loading: false,
            disabled: false
        }
    }


    upload() {
        this.uploadPicture();
        axios.post('https://siempusbaru.000webhostapp.com/tambahBuku.php', {
            buku_kode: this.state.buku_kode,
            buku_judul: this.state.buku_judul,
            penulis: this.state.penulis,
            penerbit: this.state.penerbit,
            sinopsis: this.state.sinopsis,
            image: this.state.image,
            kategori_id: this.state.kategori_id
        })
            .then((response) => {
                console.log("Status update trx  " + response);
                console.log(response);
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }
    choosePicture = () => {
        console.log("upload");
        var ImagePicker = require("react-native-image-picker");
        var options = {
            title: "Pilih Gambar",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };
        ImagePicker.showImagePicker(options, response => {
            console.log("Response = ", response);
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
                console.log("User tapped custom button: ", response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log(source);
                console.log(response.fileName);
                this.setState({
                    srcImg: source,
                    uri: response.uri,
                    fileName: response.fileName,
                    image: response.fileName
                });
            }
        });
    };
    uploadPicture = () => {
        const data = new FormData();
        data.append("fileToUpload", {
            uri: this.state.uri,
            type: "image/jpeg", // or photo.type
            name: this.state.fileName
        });
        const url =
            "https://siempusbaru.000webhostapp.com/api/upload.php";
        fetch(url, {
            method: "post",
            body: data
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    loading: false
                });
            });
    };
    submit() {
        this.upload();
    };



    render() {
        return (
            <ScrollView>
            <View style={styles.containerView}>
                {
                    (this.state.loading === true) &&
                    (
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={this.state.loading}
                            onRequestClose={() => {
                                alert('Modal has been closed.');
                            }}
                        >
                            <ActivityIndicator
                                animating={true}
                                style={styles.indicator}

                                size="large"
                            />
                        </Modal>
                    )
                }
                <View style={styles.ScreenContainer}>

                    <View style={styles.Butend}>
                        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: 50, height: 50 }} onPress={() => this.upload()}>
                            <Image source={{ uri: 'https://siempus.000webhostapp.com/images/up.png' }} style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginFormView}>
                        <TextInput placeholder="Judul Buku" placeholderColor="#c4c3cb" style={styles.TextInput1}
                            onChangeText={(buku_judul) => this.setState({ buku_judul })} />
                        <TextInput placeholder="Penulis" placeholderColor="#c4c3cb" style={styles.TextInput1}
                            onChangeText={(penulis) => this.setState({ penulis })} />

                        <View style={styles.boxAdd}>
                            <View style={styles.boxAdd2}>

                                <View style={styles.conPreview} >
                                    {(this.state.srcImg != '') &&
                                        (<Image source={this.state.srcImg}
                                            style={styles.uploadAvatar} />)
                                    }
                                </View>

                                <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
                                    onPress={
                                        () => this.choosePicture()
                                    }
                                    
                                    >
                                    <Image
                                        source={{ uri: 'http://simpleicon.com/wp-content/uploads/camera.png' }}
                                        style={{ width: 40, height: 40, alignContent: 'center' }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={styles.boxAdd2}>
                                <TextInput placeholder="Penerbit" placeholderColor="#c4c3cb" style={styles.TextInput2}
                                    onChangeText={(penerbit) => this.setState({ penerbit })} />
                                <TextInput placeholder="Buku Kode" placeholderColor="#c4c3cb" style={styles.TextInput2}
                                    onChangeText={(buku_kode) => this.setState({ buku_kode })} />

                            </View>

                        </View>

                        <TextInput placeholder="Kategori" placeholderColor="#c4c3cb" style={styles.TextInput1}
                            onChangeText={(kategori_id) => this.setState({ kategori_id })} />



                        <Text style={styles.JustText}>Summary</Text>

                        <TextInput
                            style={styles.TextInputStyleClass}
                            underlineColorAndroid="transparent"
                            placeholder={"Writes Books's Summary here.."}
                            placeholderTextColor={"#9E9E9E"}
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(sinopsis) => this.setState({ sinopsis })}
                        />
                    </View>

                </View>
            </View>
            </ScrollView>
        );
    }
}