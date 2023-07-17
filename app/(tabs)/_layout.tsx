import {Tabs }from 'expo-router'
import {MaterialIcons} from '@expo/vector-icons'
export default function TabRoutesLayout(){

  return(
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='home' size={size} color={color}/>
          )
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='person' size={size} color={color}/>
          )
        }}
      />
      
      <Tabs.Screen
        name="config"
        options={{
          title: "Config",
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='info' size={size} color={color}/>
          )
        }}
      />
    </Tabs>
  )
}