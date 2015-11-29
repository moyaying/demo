/**
 * Created by moo on 15/11/27.
 */
'use strict';

var React = require('react-native');

var {
    TouchableHighlight,
    Text,
    StyleSheet,
    PixelRatio,
    ScrollView,
    } = React;

class NavButton extends React.Component {
    render() {
        return (
            <TouchableHighlight style={styles.button} underlayColor="#B5B5B5" onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class NavMenu extends React.Component {
    render() {
        return (
            <ScrollView style={styles.scene}>
                <Text style={styles.messageText}>
                    {this.props.message}
                </Text>
                <NavButton
                    onPress={() => {
                            this.props.navigator.push({
                              message: 'Swipe right to dismiss',
                              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                            });
                        }}
                    text="Float in from right"/>
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                          message: 'Swipe down to dismiss',
                          sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                        });
                      }}
                    text="Float in from bottom"/>
                <NavButton
                    onPress={() => {
                        this.props.navigator.pop();
                      }}
                    text="Pop"
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.popToTop();
                      }}
                    text="Pop to top"
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({ id: 'navbar' });
                      }}
                    text="Navbar Example"
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({ id: 'jumping' });
                      }}
                    text="Jumping Example"
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({ id: 'breadcrumbs' });
                      }}
                    text="Breadcrumbs Example"
                    />
                <NavButton
                    onPress={() => {
                        this.props.onExampleExit();
                      }}
                    text="Exit <Navigator> Example"
                    />
            </ScrollView>
        );
    }
}

class Main extends React.Component{
    renderScene(route, nav){
        switch (route.id){

        }

        return (
            <NavMenu
                message={route.message}
                navigator={nav}
                onExampleExit={this.props.onExampleExit}
                />
        );
    }
}

var styles = StyleSheet.create({
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    },
});


exports.NavButton = NavButton;