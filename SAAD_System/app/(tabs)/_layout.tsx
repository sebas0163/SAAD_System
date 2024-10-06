import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='Activity'
        options={{
          title:'Activity',
          tabBarIcon: ({color, focused})=>(
            <TabBarIcon name={focused ? 'barbell' : 'barbell-outline'} color={color}/>
          )
        }}
      />
      <Tabs.Screen
        name='Stadistics'
        options={{
          title:'Stadistics',
          tabBarIcon: ({color, focused})=>(
            <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color}/>
          )
        }}
      />
      <Tabs.Screen
      name='Advice'
      options={{
        title:'Advice',
        tabBarIcon: ({color, focused})=>(
          <TabBarIcon name={focused ? 'fitness' : 'fitness-outline'} color={color}/>
        )
      }}
    />
    <Tabs.Screen
        name='UserInfo'
        options={{
          title:'User-Info',
          tabBarIcon: ({color, focused})=>(
            <TabBarIcon name={focused ? 'accessibility' : 'accessibility-outline'} color={color}/>
          )
        }}
      />
    </Tabs>
  );
}
