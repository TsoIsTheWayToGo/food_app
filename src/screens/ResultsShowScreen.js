import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, Image, View, Flatlist, Button, TextInput } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  console.log(id);
  
	return <Text>Pictures</Text>;
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
