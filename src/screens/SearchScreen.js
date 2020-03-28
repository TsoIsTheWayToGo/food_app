import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	//error handling
	const [errorMessage, setErrorMessage] = useState('')

	// api call
	const searchApi = async () => {
		try {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term: term, 
				location: 'san jose'
			}
		});
		setResults(response.data.businesses);
	} catch(err) {
		setErrorMessage('Something Went Wrong')
	}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={()=>searchApi()}
			/>
			<Text>We Have found {results.length} resturants.</Text>
		{errorMessage ? <Text>{errorMessage}</Text> : null }
			 
			
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
