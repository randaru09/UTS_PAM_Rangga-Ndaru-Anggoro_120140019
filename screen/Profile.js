import React from "react";
import { ImageBackground,TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>My Profile</Text>
        <ImageBackground style={styles.card1} source={require("../assets/ProfilFoto.jpeg")} resizeMode="cover">
        <View style={styles.card1}></View>
        </ImageBackground>
        <View style={styles.bio}>
        <Text style={styles.bio_teks}>Rangga Ndaru Anggoro</Text>
        <Text style={styles.bio_teks}>120140019</Text>
        <Text style={styles.bio_teks}>Teknik Informatika</Text>
        </View>
        <Text style={styles.button_back} onPress={() => navigation.navigate('Index')}>Kembali</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#3BE242',
    overflow: "hidden",
    alignItems: "center",
  },
  user_logo:{
    top:10
  },
  bio:{
    width:'100%',
    height:100,
    alignItems:'center',
    top:200
  },
  bio_teks:{
    color:'white',
    marginBottom:15,
    fontSize:22
  },
  card1: {
    top:150,
    margin: "auto",
    width: 350,
    height:350,
    padding:20,
    borderRadius:10,
  },
  header: {
  top:100,
  fontSize:22,
  fontWeight : "bold",
  color:'white'
  },
  button_back:{
    backgroundColor:'white',
    width:'100%',
    textAlign:"center",
    borderRadius:5,
    padding:10,
    position:"absolute",
    bottom:0,
    fontSize: 22,
    fontWeight : "bold",
  },
});

export default Profile;