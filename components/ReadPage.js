import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import NavBar from './toolbar';
import { Card } from 'react-native-material-ui';
import { AdMobInterstitial } from 'react-native-admob';


export default class ReadPage extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {

          AdMobInterstitial.requestAd(function() {
            AdMobInterstitial.showAd()
          }) 
        },1000)

    }
  render() {
    return (
      <View style={{flex:1}}>
      <NavBar home={false} nav={this.props.navigation} title={this.props.navigation.state.params.title}/>
       <ScrollView>
      <Card>
          <View style={{padding:20}}>
        <Text style={{fontSize:12}}>{this.props.navigation.state.params.data}</Text>
         </View>
      </Card>
      </ScrollView>
      </View>
     
    )
  }
}