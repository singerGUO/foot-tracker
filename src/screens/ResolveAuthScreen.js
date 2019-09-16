import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

// to solve the loading screen problem while you are signed in from device(AsyncStorage)
const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin()
    }, []);
    return null;

};

export default ResolveAuthScreen;
