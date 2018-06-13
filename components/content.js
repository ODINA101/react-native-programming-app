import React, { Component } from 'react'
import { Text, View,ScrollView, StatusBar } from 'react-native'
import { Card } from 'react-native-material-ui';
import Data from "./data"
import { StackNavigator } from "react-navigation"
import NavBar from './toolbar';
import {
  AdMobInterstitial,
} from 'react-native-admob'
import {connect} from "react-redux"
 class Content extends Component {
   constructor(props){
     super(props)
   }
  render() {
 
    return (
      <View style={{flex:1}}>
      <NavBar home={true} drawer={() => {this.props.redux.drawer()}} title={this.props.redux.title} />   
      
     <ScrollView style={{flex:1}}>
     {
  
           Data[this.props.redux.page].chapters.map(item => {
             return(
                <Card onPress={() => {this.props.navigation.navigate("Chapter",{title:item.title,data:item.content})}}>
        
                <View style={{padding:20}}>
                <Text>{item.title}</Text>
                </View>
             </Card>
             )
           })

     }    
  
     </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
     redux:state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    test:()=>{}
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Content)