import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import Logon from './pages/Logon'
import Feed from './pages/Feed'

export default function Routes({}){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Logon" component={Logon} options={{ header: () => null }}/>
                
                <Stack.Screen name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

