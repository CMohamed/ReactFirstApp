import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Button, View } from 'react-native';

export default class Login extends Component {
    state = {
        login: '',
        password: '',
    };

    onPressLearnMore(){
        const msg = this.state.login;
        alert(msg);
    }
    render() {
        let { login } = this.state;

        return (
            <View style = {{marginHorizontal: 20}}>
            <TextField
                label='login '
                value={login}
                onChangeText={ (login) => this.setState({ login }) }
            />
                <Button
                    onPress={()=>this.onPressLearnMore()}
                    title = "Learn More"
                    color = "#841584"
                />
            </View>
        );
    }
}
