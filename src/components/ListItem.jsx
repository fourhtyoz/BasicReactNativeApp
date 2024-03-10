import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherTypes'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'black'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  temp: {
    color: 'black',
    fontSize: 20
  },
  date: {
    color: 'black',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'black'
  }
})
export default memo(ListItem);