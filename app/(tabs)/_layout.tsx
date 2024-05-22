import React from 'react';
import { Tabs } from 'expo-router';
import { colorVariables } from '@/constants/colorVariables';
import { BookOpenIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/16/solid';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colorVariables.darkAccent }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="myBooks"
        options={{
          title: 'My Books',
          tabBarIcon: ({ color }) => <BookOpenIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <MagnifyingGlassIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
