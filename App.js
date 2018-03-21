import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import HelloWorldScreen from "./screens/HelloWorldScreen";

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  HelloWorld: { screen: HelloWorldScreen }
});

export default Navigation;
