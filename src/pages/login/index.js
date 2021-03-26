import React from 'react';
import { Container, BackgroundImg ,ContainerInput, Input, Button, Text, ContainerTexts, Form } from '../login/styles';
import { KeyboardAvoidingView, Platform, StyleSheet} from'react-native';

import login from '../../assets/login.jpg';

const Login = ({ navigation }) => {
    function handleLogin(){
        navigation.replace('Home')
    }

    function handleForgetPassword(){
        alert('Esqueceu a senha?')
    }

    function handleCreateAccount(){
        alert('Crie sua conta')
    }

    return (
        
            <BackgroundImg source={login}>
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='padding' style={styles.container}>
                <Container>
                    <Form>
                        <ContainerInput>
                            <Input placeholder='E-mail' placeholderTextColor='white' />
                        </ContainerInput>

                        <ContainerInput>
                            <Input placeholder='Password' placeholderTextColor='white'/>
                        </ContainerInput>
                            
                        <Button onPress={handleLogin}>
                            <Text>LOGIN</Text>
                        </Button>

                        <ContainerTexts>
                            <Text onPress={handleCreateAccount}>Criar conta</Text>
                            <Text>|</Text>
                            <Text onPress={handleForgetPassword}>Esqueceu a senha?</Text>                        
                        </ContainerTexts>
                    </Form>
                </Container>
                </KeyboardAvoidingView>
            </BackgroundImg>
        
    )
        
    
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})