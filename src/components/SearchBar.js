import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
// this is the short way to write things the proper way
//using Destructuring, reference long way below this for better understanding

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
	

	return (
		<View style={styles.containerStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
        autoCapitalize="none"
        autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}

			/>
		</View>
	);
};
// This is the long way of writing it. Its for me to better understand the prop system
//and passing callbacks from parent to child
// const SearchBar = props => {
// 	// console.log(props.term);

// 	return (
// 		<View style={styles.containerStyle}>
// 			<Feather name="search" style={styles.iconStyle} />
// 			<TextInput
//         autoCapitalize="none"
//         autoCorrect={false}
// 				style={styles.inputStyle}
// 				placeholder="Search"
// 				value={props.term}
//         onChangeText={newTerm => props.onTermChange(newTerm)}
//         onEndEditing={()=>props.onTermSubmit()}

// 			/>
// 		</View>
// 	);
// };

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
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 5,
	},
});

export default SearchBar;
