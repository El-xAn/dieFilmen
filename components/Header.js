import React from 'react';
import {View, Text, ImagePropTypes} from 'react-native';
import {styles} from './Styles';

export const Header = props => {
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
}