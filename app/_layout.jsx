import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import AppHeader from '../components/AppHeader';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/store';

const MainLayout = () => {
    return (
    <ReduxProvider store={store}>
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: props => <AppHeader {...props} />,
                    headerStyle: { backgroundColor: '#ebebeb' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
                />
        </Stack>
    </ReduxProvider>
  )
}

export default MainLayout;