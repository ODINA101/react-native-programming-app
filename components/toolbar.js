import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
import {connect} from "react-redux"
export default class NavBar extends Component {
constructor(props)
{
  super(props)
  console.log(props)
}


  render() {


if(this.props.home) {
    return (
      
        <Toolbar
        onLeftElementPress={() => {this.props.drawer()}}
        isSearchActive={false}
        leftElement="menu"
        centerElement={this.props.title}
        
      />
    )

  }else{
    return(
      
      <Toolbar
      onLeftElementPress={() => {this.props.nav.pop()}}
      isSearchActive={false}
      leftElement="arrow-back"
      centerElement={this.props.title}
      
    />
    )
  }
  }
}



// function mapStateToProps(state) {
//   console.log(state.page)
//   return {
//      page:state.page
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     test:()=>{}
//   }
// }
// export default connect(mapStateToProps,mapStateToProps)(NavBar)