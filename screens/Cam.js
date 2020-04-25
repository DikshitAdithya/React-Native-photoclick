import React from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import { FontAwesome } from "@expo/vector-icons";
export default class Cam extends React.Component {
   constructor(props){
     super(props);
     this.state={
      hasCameraPermission: null,
      type:Camera.Constants.Type.back,
      isFlashLightOn:Camera.Constants.FlashMode.off
     };
   }


    static navigationoptions =
    {
        title : "Photoclicker"
    }
//asking for camera permission
 async componentDidMount() {
   const{status} = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({
     hasCameraPermission : status === "granted"
   });
 }
 // Fliping the camera
 flipCamera =  () => {
    this.setState ({ 
    type:
    this.state.type === Camera.Constants.Type.back 
   ? Camera.Constants.Type.front 
   : Camera.Constants.Type.back
  });
  }
//toggle the flash
flashLight = () => {
  this.setState({
    isFlashLightOn:
    this.state.isFlashLightOn === Camera.Constants.FlashMode.off
    ? Camera.Constants.FlashMode.on
    : Camera.Constants.FlashMode.off
  });
}
//take a picture and return to home
takepicture = async() => {
  if(this.camera){
    let Photo =await this.Camera.takepictureAsync();
    this.navigation.navigate("Home",{ Photo: Photo});
  }
};


    render(){
      const {hasCameraPermission} = this.state;
      if(hasCameraPermission === null) {
        return (
        <View>
          <Text>
            Testing
          </Text>
        </View>
        );
      }else if(hasCameraPermission === false){
       return (
       <View>
          <Text>Camera access is denied</Text>
      </View>
       );
      }else if(hasCameraPermission === true){
        return(
          <View style={styles.container}>
         <Camera
                  style={styles.CameraView}
            type={this.state.type}
            flashMode={this.state.isFlashLightOn}
            ref={ref => {
              this.camera = ref;
            }}
            >
            <View style={styles.actionContainer}>
              <TouchableOpacity
              onPress = { () => this.flipCamera()  }
              style={styles.iconHolder}
              >
                <FontAwesome
                name = "camera"
                size = {35}
                style = {Styles.icon}
                
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress = { () => this.takepicture()  }
              style={styles.iconHolder}>
                <FontAwesome
                name = "circle"
                size = {35}
                style = {Styles.icon}
                
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress = { () => this.flashLight()  }
              style={styles.iconHolder}
              >
                <FontAwesome
                name = "flash"
                size = {35}
                style = {Styles.icon}
              />  
                
              </TouchableOpacity>


            </View>
        </Camera>
     </View>
    );
   }
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  CameraView : {
    flex:1
  },
  actionContainer : {
    flex : 1,
    flexDirection: "row",
    backgroundColor:"transparent"

  },
  iconHolder :{
    flex: 1,
    alignItems: "center",
    alignSelf:"flex-end"
  },
  icon : {
    margin:10,
    color:"#fff"
  }

 
});
