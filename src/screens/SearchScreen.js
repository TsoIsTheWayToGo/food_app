import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
const SearchScreen = () => {
	const [term, setTerm] = useState('');
	return (
		<View>
      <SearchBar term={term} 
      onTermChange={newTerm => setTerm(newTerm)}
      onTermSubmit={()=> console.log('The term was submitted')}
      />
			<Text>{term}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
