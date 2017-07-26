import React,{ Component } from 'react'
import{
  AppRegistry, Image, Text, View, StyleSheet
}
from 'react-native'
// Image 图片
class Images extends Component {
  render(){
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{marginTop:30,width:192,height:110}}></Image>
    )
  }
}

// props
class SayHello extends Component {
  render(){
    return (
      <Text>hello {this.props.name}</Text>
    )
  }
}

class propsDemo extends Component {
  render(){
    return (
      <View style={{marginTop:30,width:192,height:110}}>
        <SayHello name="zero"></SayHello>
      </View>
    )
  }
}

// State
class StateFn extends Component {
  constructor(props){
    super()
    this.state = {showText:false}
    setInterval(() => {
      this.setState(previousState => {
        return {showText:!previousState.showText}
      })
    },1000)
  }
  render(){
    let displaytext = this.state.showText ? this.props.name : '';
    return (
      <Text>this is {displaytext}</Text>
    )
  }
}
class StateDemo extends Component {
  render(){
    return (
      <View style={{marginTop:30,width:192,height:110}}>
        <StateFn name="zero"></StateFn>
      </View>
    )
  }
}
// 样式
const styles = StyleSheet.create({
  bigblue:{
    marginTop:50,
    color:'blue',
    fontWeight:'bold',
    fontSize:30
  },
  smallred:{
    marginTop:100,
    color:'red',
    fontSize:12
  }
})
class reactNativeDemo extends Component {
  render(){
    return (
      <View>
        <Text style={styles.bigblue}>hello world</Text>
        <Text style={styles.smallred}>hello world</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
