import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import NavBar from './toolbar';
import { Card } from 'react-native-material-ui';
export default class Chapter extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <NavBar home={false} nav={this.props.navigation} title={this.props.navigation.state.params.title}/>
       <ScrollView style={{flex:1}}>
      {
   this.props.navigation.state.params.data.map(item => {
     return (
       <Card onPress={() => this.props.navigation.push("ReadPage",{data:item.data,title:item.title})}>
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