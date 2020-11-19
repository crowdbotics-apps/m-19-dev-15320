import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3:
      "jhgjhgjhgjhgjgjjhgjhjhjgjhgjhghg jhgjhghjg jhgjhghj jhgjhghjg jhgjhg jhgjhgjhg jhgjgjh jhgjhgfghfhf hgfhgfhg jhgfjhgjhg hgfhf jhgjhghj jhgjhgjh jhgjhgjhg jhgjhgjh jhgjgjhgjh jhgjhgjhg jhgfjjjg jhgjgjhgjhg jhgjhgjhg jhgjhgjh jhgjhghj"
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={false}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  View_1: {},
  Text_2: {},
  TextInput_3: { height: 100, overflow: "hidden" }
})
