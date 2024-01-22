import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Cadastro" component={Cadastro}
                options={{
                    headerShown: false
                }}
            />


            <Stack.Screen
                name="Login" component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Home" component={Home}
                options={{
                    
                }}
            />
        </Stack.Navigator>
    )
}