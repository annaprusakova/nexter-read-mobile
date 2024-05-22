import { ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Container from '@/components/ui/Container';
import SearchInput from '@/components/ui/SearchInput';
import React from 'react';
import { colorVariables } from '@/constants/colorVariables';
import ReadingChallenge from '@/components/ReadingChallenge';
import Shelves from '@/components/Shelves';

export default function Tab() {
  const usersShelves = ['Currently Reading', 'Read', 'Want to Read', 'Favourite'];
  return (
    <Container gap={'$2'} outerStyles={styles.container}>
      <Stack.Screen options={{ headerShown: false, title: 'My Books' }} />
      <SearchInput />
      <ScrollView style={styles.scrollView}>
        <ReadingChallenge />
        <Shelves />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorVariables.wheatWhite,
  },
  scrollView: {
    height: 1000,
  },
});
