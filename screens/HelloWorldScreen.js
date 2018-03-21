import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import axios from "axios";

const util = require("util");
// For Boxes to be displayed
const buttonColor = "#E1D2C5";

export default class HelloWorldScreen extends React.Component {
  static navigationOptions = {
    title: "Hello World Screen"
  };

  state = { data: [] };

  componentWillMount() {
    axios
      .get("https://devccc.assuredperformance.net/react_test.php")
      .then(response => this.setState({ data: response.data[6] }));
  }

  renderData() {
    //return this.state.data.map(data => (
    return (
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{this.state.data[3]}</Text>
      </View>
    );
    // ));
    // );
  }

  render() {
    let jsonData = this.state.data;
    // console.log("this.props.navigation = "+ util.inspect(this.props.navigation, false, null));
    console.log("this.state.data: ", this.state.data);
    console.log("this.state.data[3]: ", this.state.data[3]);
    var { params } = this.props.navigation.state;
    var { navigate } = this.props.navigation;

    return (
      // <View>
      //   <Text>This is Hello World screen</Text>
      //   <Text>--------------------------</Text>
      //   {this.renderData()}
      //   {/* <Text>Params from home screen: {params.content}</Text> */}
      // </View>
      <TouchableHighlight
        onPress={() => navigate("HelloWorld")}
        style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
        title="Box-1"
      >
        <View style={styles.btnContainer}>
          {/* <Text>This is Hello World screen</Text> */}
          {this.renderData()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: null,
    borderRadius: 5,
    padding: 5,
    marginTop: 200,
    marginBottom: 250,
    marginLeft: 15,
    marginRight: 15
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15
  },
  btnText: {
    fontSize: 18,
    color: "#1d1669",
    textAlign: "center",
    alignSelf: "center"
  }
});
