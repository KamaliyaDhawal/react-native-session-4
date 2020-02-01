import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import SubmitButton from '../elements/Submit';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({navigation}) {
    const [loginData, setLoginData] = useState({email:'', password:''});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [submit, setSubmit] = useState(false);
    function fncLogin() {
        setSubmit(true);
        const { email, password } = loginData;
        if(email === undefined || email.length == 0) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if(password === undefined || password.length == 0) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        if(email.length > 0 && password.length > 0) {
            fetch('http://35.160.197.175:3006/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })
            .then((response) => {
                if(response.status === 200) {
                    return(response.json());
                } else {
                    Alert.alert('Error', "Invalid email or password"); 
                }
            })
            .then((result) => {
                navigation.navigate('Home', {result});
            })
        }

    }
    {
    return(
        
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container} >
                <View style={[styles.commonContent, styles.topContent]}>
                    <Text style={styles.topContentText}>
                        Login
                    </Text>
                </View>
                <View style={[styles.commonContent, styles.centerContent]}>
                    <View style={styles.inputContainer}>
                        <MaterialIcons
                            name = "email"
                            color = "white"
                            size = {24}
                            style = {{
                                marginLeft: 10
                            }}
                        />
                        <TextInput
                            placeholder="Ex: jm1@example.com"
                            style={styles.input}
                            keyboardType='email-address'
                            onChangeText={(email) => {
                                if(email.length > 0) {
                                    setEmailError(false);
                                } else {
                                    setEmailError(true);
                                }
                                setLoginData({email, password: loginData.password});
                            }}
                            value={loginData.email}
                            placeholderTextColor="gray"
                        />
                        <MaterialIcons
                            name = "close"
                            color = "red"
                            size = {24}
                            onPress = { () => {
                                setLoginData({ email: '', password: loginData.password });
                            }}
                        />
                    </View>
                    {
                        submit && emailError? 
                        <Text style={styles.errorText}>
                            Enter valid email address.
                        </Text>:<Text></Text>
                    }
                    <View style={styles.inputContainer}>
                        <MaterialIcons
                            name = "lock"
                            color = "white"
                            size = {24}
                        />
                        <TextInput
                            placeholder="Ex: jay@123"
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(password) => {
                                if(password.length > 0) {
                                    setPasswordError(false);
                                } else {
                                    setPasswordError(true);
                                }
                                setLoginData({email: loginData.email, password});
                            }}
                            value={loginData.password}
                            placeholderTextColor="gray"
                        />
                        <MaterialIcons
                            name = "close"
                            color = "red"
                            size = {24}
                            onPress = {(password) => {
                                setLoginData({email: loginData.email, password: '' });
                            }}
                        />
                    </View>
                    {
                        submit && passwordError? 
                        <Text style={styles.errorText}>
                            Enter valid password address.
                        </Text>:<Text></Text>
                    }
                </View>
                <View onPress={fncLogin}>
                    <SubmitButton
                        buttonTitle={<MaterialIcons name="arrow-forward" color="#111" size={30} />}
                        fncLogin={fncLogin}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#111'
    },
    commonContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContent: {
        flex: 0.3,
        justifyContent: 'center',
        padding: 10
    },
    topContentText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    },
    centerContent: {
        flex: 0.3,
        alignContent: 'center'
    },
    input: {
        borderColor: 'gray',
        width: '100%',
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20
    },
    inputContainer: {
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#fff',
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginTop: -5,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    }
});
