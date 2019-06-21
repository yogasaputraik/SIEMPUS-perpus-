const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
  backgroundColor: '#99CCFF',
},
loginScreenContainer: {
  flex: 1,
},
ScreenContainer: {
  flex: 1,
  backgroundColor: 'white',
},
list: {
  marginTop:10
},

logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
JustText: {
  fontSize: 15,
  marginTop: 10,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1,
  alignItems: 'center',
},
loginFormTextInput: {
  height: 43,
  width: 250,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  width: 150,
  marginTop: 10,
},
TextInput1: {
  height: 43,
  width: 320,
  fontSize: 14,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 5,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 5,
  marginBottom: 5,

},
TextInput2: {
  height: 43,
  width: 150,
  fontSize: 14,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 5,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 5,
  marginBottom: 5,

},
boxAdd: {
  flexDirection: "row",
  alignItems: "center",
},
boxAdd2: {
  flexDirection: "column",
  alignItems: "center",
},

boxImage: {
  
  alignItems: "center",
  justifyContent: "center",

},
box1: {
  flex: 1,
  width: "90%",
  paddingTop: 60,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 15,
  flexDirection: "row",
  alignItems: "center"

},

boxButton: {
  flex: 1,
  margin: 5,
  flexDirection: "row",
  alignItems: "center"

},
box2: {
  flex: 4,
  width: "90%",
  marginLeft: 10,
  marginRight: 10,
  marginBottom : 50,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around"

},
boxLook: {
  margin: 10,
  flexDirection: "column",
  alignItems: "center",

},
txtHeader: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
  color:'#fff'
},
header: {
  height:70,
  backgroundColor:'#03587f',
  justifyContent:'center',
  alignItems:'center'
},
boxIsiBuku: {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 15,
  flexDirection: "row",
  alignItems: "center"

},
buttonText: {
      textAlign: "center",
      height: 40,
      width: "100%",
      marginTop: 10,
      color: "#FFFFFF",
      fontSize: 16
  },
txtInput: {
      height: 30,
      backgroundColor:'#fff',
      borderColor: 'gray',
      borderWidth: 1,
  },

  buttonEdit: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#898be2',
    margin: 5,
    height: 50,
    width: 80,
    borderRadius: 5,
},
buttonHapus: {
    
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ff2424',
  margin: 5,
  height: 50,
  width: 80,
  borderRadius: 5,
},
inputContainer: {
  borderBottomColor: '#F5FCFF',
  backgroundColor: '#FFFFFF',
  borderRadius:10,
  borderBottomWidth: 1,
  width:320,
  height:40,
  marginBottom:10,
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
},
inputIcon:{
width:30,
height:30,
marginLeft:15,
justifyContent: 'center'
},
button2Style: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#898be2',
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    width: 150,
    borderRadius: 5,
},
button3Style: {
  paddingLeft: 20,
  paddingRight: 20,
  justifyContent: 'center',
  backgroundColor: '#ff2424',
  marginTop: 20,
  marginBottom: 20,
  height: 60,
  width: 300,
  borderRadius: 5,
},
conPreview: {
 
  alignItems: 'center',
  justifyContent: 'center',
  height: 80,
  width: 70,
  borderRadius: 5,
  borderWidth: 0.3,
  borderColor: 'brown',
},
uploadAvatar: {
  height: 80,
  width: 70
},
TextInputStyleClass:{
 
  textAlign: 'left',
  height: 50,
  width: 320,
  borderWidth: 1,
  borderColor: '#9E9E9E',
  borderRadius: 5 ,
  backgroundColor : "#FFFFFF",
  height: 150
   
  },

  Butend: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 70,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent : 'center',
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: 'red',
    fontWeight: "800",
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  SeparatorTidur: {
    backgroundColor: '#fff',
    height: 1,
    width: 120,
  },
  ImageBuku: {
    height: 130,
    width: 90,
    alignItems: 'flex-start',
    justifyContent : 'flex-start',
    resizeMode: 'stretch',
  },
  boxBuku: {
    flex: 1,
    width: "90%",
   // paddingTop: 60,
    marginLeft: 10,
    marginRight: 10,
   // marginTop: 15,
    flexDirection: "column", 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 210,
    width: 120,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'brown',
  
  },
};
