import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default class LoginScreen extends React.Component{

render(){

    return(
   
        <View style={styles.main}>
           

         <View style={styles.view1}>
      <Text style={{textAlign:'center',fontSize:20,color:'white'}}>REGISTER </Text>
       </View>

       <View style ={{flex:.6,width:'100%',height:'100%',borderColor:'transparent',borderWidth:1}}>

       <View style={styles.first}>

<TextInput name="address-book" style={styles.name}  placeholder="UserName"/>


       </View>

     <View style={styles.second}>

     <TextInput name="address-book" style={styles.class}  placeholder="Password"/>

    </View>

 <View style={styles.third}>

 <TextInput name="address-book" style={styles.Bus}  placeholder="Email"/>

</View>

 <View style={styles.fourth}>

 <TextInput name="address-book" style={styles.email}  placeholder="Phno"/>

</View>


<View style={{ flex:.2,justifyContent:'center',alignItems:'center',width:"100%", height:"25%",marginTop:25}}>
      <TouchableOpacity style={{width:'45%',height:48,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(249,128,45,1)',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Register</Text>

        </TouchableOpacity>

        </View> 
</View>



        </View>
        
    )
}
}

const styles=StyleSheet.create(
    {
    main:{
           flex:1,
           width:'100%',
           height:'100%',
           backgroundColor:'rgba(43,148,100,1)'
        },
        view1:{
          
             flex:.2,
             width:400,
             height:300,
             justifyContent:'center',
             marginTop:20,
             borderColor:'transparent',
             borderWidth:1,
             textAlign:'center',
             alignItems:'center',
             

        },
        
        first:{
                 width:'100%',
                 height:50,
                 borderColor:'transparent',
                 marginTop:10,
                 borderWidth:1
                },

                second:{
                    width:'100%',
                    height:50,
                    borderColor:'transparent',
                    marginTop:10,
                    borderWidth:1
                   },
                   third:{
                    width:'100%',
                    height:50,
                    borderColor:'transparent',
                    marginTop:10,
                    borderWidth:1
                   },

                   fourth:{
                    width:'100%',
                    height:50,
                    borderColor:'transparent',
                    marginTop:10,
                    borderWidth:1
                   },


                   

name:
  {
    width:340,
    height:45,
    borderColor:"white",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:10,
    backgroundColor:"transparent",
    color:'white',
    borderRadius:50

  },
  class:
  {
    width:340,
    height:45,
    borderColor:"white",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:10,
    backgroundColor:"transparent",
    color:'white',
    borderRadius:50

  },
  Bus:
  {
    width:340,
    height:45,
    borderColor:"white",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:10,
    backgroundColor:"transparent",
    color:'white',
    borderRadius:50

  },

  email:
  {
    width:340,
    height:45,
    borderColor:"white",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:10,
    backgroundColor:"transparent",
    color:'white',
    borderRadius:50

  },
  
   })
