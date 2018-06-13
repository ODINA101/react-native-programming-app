/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ScrollView,
    Image,
    StatusBar
} from 'react-native';
import {Button} from 'native-base';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
const SideMenu = require('react-native-side-menu');
import {Card, Drawer, Avatar} from 'react-native-material-ui';
import navList from './components/nav';
import {createStore, applyMiddleware} from "redux"
import reducer from './components/reducer';
import logger from "redux-logger"
import {Provider} from "react-redux"
import MainRouter from "./components/MainRouter"
var store = createStore(reducer, applyMiddleware(logger))
import {AdMobInterstitial } from 'react-native-admob'
const uiTheme = {

    palette: {
        primaryColor: COLOR.green500
    },
    toolbar: {
        container: {
            height: 50
        }
    }
};

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            title: "HTML & CSS"
        }
        this.changePage = this
            .changePage
            .bind(this)
        this.setDrawer = this
            .setDrawer
            .bind(this)
    }

    componentDidMount() {
        AdMobInterstitial.setAdUnitID('ca-app-pub-6370427711797263/1041980552');

      store.dispatch({type: "DrawerRef", payload: this.setDrawer})
      
    }
    setDrawer() {
        this
            .refs["Drawer"]
            .openDrawer()
    }
    changePage(item) {
        this.setState({title: item.value})
        this
            .refs["Drawer"]
            .closeDrawer()

    }

    render() {
        var navigationView = (

            <View style={{
                    flex: 1
                }}>
                <StatusBar backgroundColor="green" />
                <ScrollView
                    style={{
                        flex: 1,
                        marginTop: 10,
                    }}>
                    {
                        navList.map(item => {
                            return (
                                <Button
                                    full={true}
                                    light={true}
                                    backgroundColor={"#FFF"}
                                    style={{
                                      flex:1,
                                        height: 80
                                    }}
                                    onPress={() => {
                                        this.changePage(item);
                                        store.dispatch({type: "pageChanged", payload: item.objName});
                                        store.dispatch({type: "title", payload: item.title});
                                        

                                    }}>
                                    <Image
                                        style={[
                                            {
                                                width: 30,
                                                height: 40
                                            },
                                            item.styles
                                        ]}
                                        source={item.icon}
                                        />
                                    <Text>{item.value}</Text>
                                </Button>
                            )

                        })

                    }
                </ScrollView>
            </View>
        )
        return (

            <DrawerLayoutAndroid
                ref={"Drawer"}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Provider store={store}>
                    <ThemeProvider
                        uiTheme={uiTheme}
                        style={{
                            flex: 1
                        }}>
                        <View
                            style={{
                                flex: 1
                            }}>
                            <MainRouter/>
                        </View>
                    </ThemeProvider>
                </Provider>
            </DrawerLayoutAndroid>

        );

    }
}
