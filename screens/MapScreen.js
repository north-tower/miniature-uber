import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames"
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'


const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
   <View>
    <View style={tw`h-1/2`}>
        <Map />
    </View>

    <View style={tw`h-1/2`}>
      <Stack.Navigator>
        <Stack.Screen 
        name='NavigateCard'
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={
          {
            headerShown: false,
          }
        }
        />
      </Stack.Navigator>
    </View>
   </View>
      
   
  )
}

export default MapScreen