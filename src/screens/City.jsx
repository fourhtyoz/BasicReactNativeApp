import React from "react";
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  StatusBar, 
  View
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

export default function City({ weatherData }) {
  const { name, country, population, sunrise, sunset } = weatherData

  const { 
    container, 
    imageLayout, 
    cityName, 
    countryName, 
    cityText, 
    populationWrapper, 
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={imageLayout} 
                       source={require('../../assets/city-bg.jpg')}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName='user'
                    iconColor='white' 
                    iconSize={50} 
                    bodyText={`Population: ${population}`}
                    bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName='sunrise'
                    iconColor='white'
                    iconSize={50} 
                    bodyText={moment(sunrise).format('h:mm a')}
                    bodyTextStyles={riseSetText}
          />
          <IconText iconName='sunset'
                    iconColor='white'
                    iconSize={50}
                    bodyText={moment(sunset).format('h:mm a')}
                    bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    gap: 20
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})