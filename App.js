import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import BusScreen from './screens/BusScreen';
import TrackScreen from './screens/TrackScreen';
// import Register from './screens/Register';

 
  

console.disableYellowBox = true;

    const TapNavigator = createMaterialTopTabNavigator({

    Home:HomeScreen,
    Register:LoginScreen,
    Student:StudentScreen,
    BusDetails:BusScreen,
    TrackBus:TrackScreen,
    // Register:RegisterScreen
},
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }
    

})

export default class Myapp extends Component
{
 
  constructor(){
 
    super();
 
    this.state={
 
      isVisible : true,
 
    }
 
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var hidee = this;
 
    setTimeout(function(){
 
      hidee.Hide_Splash_Screen();
 
    }, 5000);
 
 
  
  }
 
    render()
    {
        let Splash_Screen = (
 
            <View style={styles.SplashScreen_RootView}>
 
                <View style={styles.SplashScreen_ChildView}>
                    
                     <LottieView
                      source={require('./bus.json')}
                      autoPlay
                      loop
                      
                     />
                      
 
                </View>
                {/* <View style={{justifyContent:'center',alignItems:'center'}}><Animatable.Text animation="bounceOutRight">Welcome</Animatable.Text></View> */}

               
            </View> )
            
 
        return(
 
 
 
            <View style={styles.MainContainer}>
                  
              
              <TapNavigator/>
 
 {
   (this.state.isVisible === true) ? Splash_Screen : null
 }
            </View>
            
 
            
            
        );
    }
}
 
const styles = StyleSheet.create({

    MainContainer:
    {
        flex: 1,
       backgroundColor:'red',
       width:'100%',
       height:'100%'
        
    },
 
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor:"rgba(65,146,75,1)",
        flex:1,
        
    },
 
    TouchableOpacity_Style:{
 
        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'
 
    }
});
