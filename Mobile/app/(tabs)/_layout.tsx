import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
          position: 'absolute', 
        },
        default: {
          height: 55,
        },
      }),
    }}
  >
  
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rock"
        options={{
          title: 'Rock',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="guitar-electric" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Pop"
        options={{
          title: 'Pop',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="microphone-variant" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Vaneira"
        options={{
          title: 'Vaneira',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dance-ballroom" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Modao"
        options={{
          title: 'Modão',
          tabBarIcon: ({ color }) => <FontAwesome5 name="guitar" size={24} color={color} />
        }}
      />
    </Tabs>

  );
}
