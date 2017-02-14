import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCPPnmPh__L9ZLLotxz8dn6Duz-s3T_bPY',
            authDomain: 'auth-6b92c.firebaseapp.com',
            databaseURL: 'https://auth-6b92c.firebaseio.com',
            storageBucket: 'auth-6b92c.appspot.com',
            messagingSenderId: '545407457796',
        };

        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <CardSection><Button>Log Out</Button></CardSection>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
