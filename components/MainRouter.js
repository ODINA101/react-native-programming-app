import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { Card } from 'react-native-material-ui';
import Data from "./data"
import { StackNavigator } from "react-navigation"
import Content from './content';
import Chapter from './chapter';
import ReadPage from './ReadPage';

export default StackNavigator({
  Home:{
    screen:Content
  },
  Chapter:{
    screen:Chapter
  },
  ReadPage:{
    screen:ReadPage
  }
   
},{
  headerMode:"hidden",
})