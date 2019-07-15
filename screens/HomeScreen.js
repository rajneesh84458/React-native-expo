import React from 'react';
import { StyleSheet, View,TextInput,Text,TouchableOpacity,Image,ScrollView} from 'react-native';
import{FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';


export default class HomeScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      showMe:'true'
    }
  }
  render() {
    return (
      
      <View style={styles.container}>
     
    
      <View style={{flex:1,width:'100%',height:'100%',justifyContent:'center',alignItems:'center',marginTop:70}}>
      <ScrollView>
      <View style={styles.second}>
      <View style={styles.circle}>
        <Image source={require('../images/pic.png')} style={{width:"100%",height:'100%',borderRadius:100}}/>
        </View>
      <Text style={{textAlign:'center',color:'white',marginTop:10,fontSize:20}}>Bus Tracking System</Text>
       </View>
    
   <View style={styles.line1}>
      
      <FontAwesome  style={{marginLeft:20,padding:5}}name='user' size={25}></FontAwesome>
      
      <TextInput style={styles.admin} underlineColorAndroid="silver" placeholder="Username"/>

      </View>
       
        
      <View style={styles.line2}>

 <MaterialCommunityIcons  style={{marginLeft:20,padding:5}}name='lock-question' size={25}></MaterialCommunityIcons>
      <TextInput style={styles.pass}  secureTextEntry={true} underlineColorAndroid="silver" placeholder="Password"/>
      </View>
     
     
      <View style={styles.fourth}>
      <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(249,128,45,1)',borderColor:'transparent',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Sign In</Text>

        </TouchableOpacity>

</View>

      
</ScrollView>

      </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: 'rgba(43,148,100,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
line1:
{ 
flexDirection:'row',

marginTop:25,
width:'100%',
height:'10%',
borderWidth:1,
borderColor:"transparent",

},

line2:{
  flexDirection:'row',
  width:'100%',
  height:'10%',
  borderWidth:1,
  borderColor:"transparent",
  marginTop:20
  
  },
  admin:
  {
    width:200,
    height:40,
    borderColor:"transparent",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:30,
    backgroundColor:"rgba(43,148,100,1)",
  },
  pass:
  {
    width:200,
    height:40,
    borderColor:"transparent",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:25,
    backgroundColor:"rgba(43,148,100,1)",
  },
  third:
  { 

    width:300,
    height:30,
  },
  fourth:
  {
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:"20%"
  },

  fifth:{
    width:"100%",
    height:"10%",
    },
    second:{
      flex:0.2,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'transparent',
  },
circle:
{
  
  width:130,
  height:130,
  borderColor:'rgba(255,162,0,1)',
  borderWidth:1,
  borderRadius:100
},
  
});
