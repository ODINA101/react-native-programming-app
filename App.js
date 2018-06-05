/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import NavBar from './components/toolbar';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
const SideMenu = require('react-native-side-menu');
import { Card } from 'react-native-material-ui';
const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};
 
export default class App extends Component  {
  constructor(){
    super()
  }
  setDrawer() {
    this.refs["Drawer"].openDrawer()
  }
  render() {
    var navigationView = (
      <View style={{flex:1}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>

    )
    return (
      

<DrawerLayoutAndroid
ref={"Drawer"}
drawerWidth={300}
drawerPosition={DrawerLayoutAndroid.positions.Left}
renderNavigationView={() => navigationView}>
  <ThemeProvider uiTheme={uiTheme} style={{flex:1}}>
      <View style={{flex:1}}>
      <NavBar sidebar={()=>this.setDrawer()} />   
      <Card style={{flex:1}} onPress={() => {alert("works fine")}}>
        <View style={{padding:60}}>
        <Text>Hello world!</Text>
        </View>
      </Card>
      </View>
      </ThemeProvider>
</DrawerLayoutAndroid>
    );
  }
}

 