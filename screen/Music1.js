import React from "react";
import { ImageBackground,TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const Music1 = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/JamesArthurNaked.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.header}>RUMUS </Text>
      <FontAwesome5 style={styles.user_logo} name="user" size={24} color="#3BE242" onPress={() => navigation.navigate('Profile')} />
    </View>
    <View style={styles.music_display}>
    <Text style={styles.title}>James Arthur - Naked</Text>
    <ImageBackground source={require("../assets/JamesArthur.jpg")} resizeMode="cover">
    <View style={styles.card1}></View>
    </ImageBackground>
    <Text style={styles.button_play} onPress={playSound}>PUTAR</Text>
    </View>
    <Text style={styles.button_back} onPress={() => navigation.navigate('Index')}>Kembali</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  user_logo:{
    top:10
  },
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#3BE242',
    overflow: "hidden",
    alignItems: "center",
  },
  title:{
    fontSize:22,
    color:'white',
    marginBottom:10,
  },
  music_display:{
    width:'100%',
    alignItems:"center",
    top:70
  },
  button_play:{
    backgroundColor:'white',
    width:150,
    textAlign:"center",
    borderRadius:5,
    padding:10,
    fontSize: 22,
    fontWeight : "bold",
    top:15
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
  header: {
    top:10,
    color: '#3BE242',
    fontSize: 22,
    fontWeight : "bold",
    left:0
},
  top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:25,
    justifyContent: 'space-between',
  },
  card1: {
    // backgroundColor: 'white',
    margin: "auto",
    width: 350,
    height:400,
    padding:20,
    borderRadius:10,
  },
  header: {
    top:7,
    color: '#3BE242',
    fontSize: 22,
    fontWeight : "bold",
    left:0
},
});

export default Music1;