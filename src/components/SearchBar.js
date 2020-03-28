import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = () => {
	return (
		<View style={styles.containerStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput style={styles.inputStyle} placeholder="Search" />
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		height: 50,
    backgroundColor: '#F0EEEE',
    marginTop: 10,
		marginHorizontal: 15,
		borderRadius: 8,
		flexDirection: 'row',
	},
	inputStyle: {

    flex: 1,
    fontSize:18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5
  }
});

export default SearchBar;
