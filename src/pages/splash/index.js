import React, { useEffect } from 'react';
import { Container, Logo, FooterLogo } from '../splash/styles';

import logo from '../../assets/logo.png';
import splashLogo from '../../assets/splash.png';


const Splash = ({ navigation }) => {    
    const handleLogin = () => {
        navigation.navigate('Login');
    };

    useEffect(() => {
        setTimeout(() => {
            handleLogin();
        }, 3000);
    },[]);

    return (
        <Container>
            <Logo source={logo}/>
            <FooterLogo source={splashLogo} />
        </Container>
    )
};

export default Splash;

