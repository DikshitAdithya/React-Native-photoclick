import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

export default class Home extends React.Component {
    static navigationoptions =
    {
        title : "Photoclicker"
    }

    render(){
        let Photo = this.props.navigation.getParam("Photo","Empty");
  return (
    <View style={styles.container}>
      <Image    
      title = "click photo"
      resizeMode="center"
      style={styles.Imageholder}
      source={
          Photo == "Empty" ? require('../assets/cameralogo.png') : Photo
             }
      />
    <Button
   
    title = "Take photo"
    style={styles.ImageButton}
    onPress = {()=> {
        this.props.navigation.navigate("Camera");
    }}
    />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imageholder : {
      alignSelf : "center",
      borderColor : "#25CCF7",
      height:500,

      
  },
  ImageButton : {
      margin : 20,
      
    
      
      
      
  }
});
