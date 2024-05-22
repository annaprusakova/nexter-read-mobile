import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import SearchInput from '@/components/ui/SearchInput';
import React from 'react';
import Container from '@/components/ui/Container';
import { colorVariables } from '@/constants/colorVariables';

export default function Tab() {
  return (
    <Container gap={'$2'} outerStyles={styles.container}>
      <Stack.Screen options={{ headerShown: false, title: 'Home' }} />
      <SearchInput />
      <ScrollView></ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorVariables.accent,
  },
});
