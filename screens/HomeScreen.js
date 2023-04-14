import { View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import MapboxAutocomplete from 'react-mapbox-autocomplete';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: 'https://links.papareact.com/gzs' }} />

        <MapboxPlacesAutocomplete
      id="origin"
      placeholder="Origin"
      accessToken='pk.eyJ1IjoibWlraTAwNyIsImEiOiJjbGNxNHd2aGkwMmg1M29reWd2ZGJod2M1In0.f9-OPY7z8IFoBGwdM7zUZw' // MAPBOX_PUBLIC_TOKEN is stored in .env root project folder
      onPlaceSelect={(data) => {
        dispatch(setOrigin(data));
        dispatch(setDestination(null));
      }}
      onClearInput={({ id }) => {
        id === "origin" && dispatch(setOrigin(null));
      }}
      countryId="254"

      style={
        tw`mb-2`
      }
    />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
