import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

export default function Tab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Stack.Screen name="home" options={{ headerShown: false, title: 'Home' }} />
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
}
