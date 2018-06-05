import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
export default class NavBar extends Component {



  render() {
    return (
        <Toolbar
        onLeftElementPress={() => {this.props.sidebar()}}
        isSearchActive={false}
        leftElement="menu"
        centerElement="HTML & CSS"
        
      />
    )
  }
}