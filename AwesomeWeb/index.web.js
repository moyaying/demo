/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Platform
} = React;

import App from './app/App';

AppRegistry.registerComponent('AwesomeProject', () => App);

// var React = require('react-native');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Platform,
// } = React;

// var AwesomeProject = React.createClass({
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.web.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => App);

if (Platform.OS == 'web') {
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('AwesomeProject', {
    rootTag: app
  })
}