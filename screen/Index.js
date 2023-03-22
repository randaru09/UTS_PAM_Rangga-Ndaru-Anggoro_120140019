import {React,useState} from "react";
import { Image,ImageBackground, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Index = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.header}>RUMUS</Text>
              <FontAwesome5 style={styles.user_logo} name="user" size={24} color="#3BE242" onPress={() => navigation.navigate('Profile')}/>
            </View>
            <View style={styles.card1}>
              <Text style={styles.header2}>RUMUS (Ndaru Musik), dengarkan lagu-lagu kesukaannya Ndaru !</Text>
            </View>
            <View style={styles.item}>
              <ImageBackground source={require("../assets/JamesArthur.jpg")} resizeMode="cover">
              <View style={styles.item_card}>
                <View style={styles.shadow_title}>
                  <Text style={styles.music_title}>Naked - James Arthur</Text>
                  <Text style={styles.button_play} onPress={() => navigation.navigate('Music1')}>Dengarkan</Text>
                </View>
              </View>
              </ImageBackground>
              <ImageBackground source={require("../assets/OneOkRock.jpg")} resizeMode="cover">
              <View style={styles.item_card}>
                <View style={styles.shadow_title}>
                  <Text style={styles.music_title}>When I Was King - One Ok Rock</Text>
                  <Text style={styles.button_play} onPress={() => navigation.navigate('Music2')}>Dengarkan</Text>
                </View>
              </View>
              </ImageBackground>
            </View>
            <View style={styles.item}>
            <ImageBackground source={require("../assets/KidLaroi.png")} resizeMode="cover">
              <View style={styles.item_card}>
                <View style={styles.shadow_title}>
                  <Text style={styles.music_title}>Stay - Kid Laroy</Text>
                  <Text style={styles.button_play} onPress={() => navigation.navigate('Music3')}>Dengarkan</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground source={require("../assets/ForRevenge.jpg")} resizeMode="cover">
              <View style={styles.item_card}>
                <View style={styles.shadow_title}>
                  <Text style={styles.music_title}>Serana - For Revenge</Text>
                  <Text style={styles.button_play} onPress={() => navigation.navigate('Music4')}>Dengarkan</Text>
                </View>
              </View>
            </ImageBackground>
            </View>
          </View>
        );
  }
        
            {/* <View style={styles.card}>
              <Text style={styles.header2}>Bandara keberangkatan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Bandara Tujuan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-land" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                    <Fontisto name="date" size={24} color="#5CA454" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}><Text style = {styles.search}
              >Cari</Text></TouchableOpacity>
            </View> */}

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
  item: {
    top:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:"space-between",
    padding:20,
    height:300,
    alignItems:"center"
  },
  card1: {
    top : 35,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  music_title: {
    margin: 5,
    fontWeight : "bold",
    textAlign:"center",
    color:'white'
  },
  item_card: {
    // backgroundColor: 'black',
    margin: "auto",
    width:170,
    height:300,
    height:200,
    borderRadius:10,
  },
  button_play:{
    backgroundColor:'white',
    width:80,
    textAlign:"center",
    borderRadius:5,
    padding:3,
    position:"absolute",
    bottom:7
  },
  shadow_title:{
    backgroundColor:'rgba(0, 0, 0, 0.42)',
    width:'100%',
    height:80,
    position:"absolute",
    bottom:0,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    alignItems:"center"
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:25,
    justifyContent: 'space-between',
  },
header: {
    top:10,
    color: '#3BE242',
    fontSize: 22,
    fontWeight : "bold",
    left:0
},
header2: {
    margin: 5,
    fontWeight : "bold",
    textAlign:"center"
},
card: {
    top : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
});

export default Index;