import React, { useState, useReducer, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();
	
	const filterResultsByPrice = (price) => {
		return results.filter( result => {
			return result.price === price
		})
	}

	// console.log(results[0])
	return (
		<>
			<SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
			
			<ScrollView> 
			<ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
			<ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
			<ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />

			</ScrollView>
			
			{errorMessage ? <Text>{errorMessage}</Text> : null}
		</>
	);
};

const styles = StyleSheet.create({

});

export default SearchScreen;








// import React, { useState, useReducer, useEffect } from 'react';
// import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
// 	const [term, setTerm] = useState('');
// const [results, setResults] = useState([]);
// //error handling
// const [errorMessage, setErrorMessage] = useState('');
// // console.log('^');

// // api call
// const searchApi = async searchTerm => {
// 	// console.log('hi there');
// 	try {
// 		const response = await yelp.get('/search', {
// 			params: {
// 				limit: 10,
// 				term: term,
// 				location: 'san jose',
// 			},
// 		});
// 		setResults(response.data.businesses);
// 	} catch (err) {
// 		setErrorMessage('Something Went Wrong');
// 	}
// };

// // const initialData = searchApi('resturant')

// //dont do this it causes infinite loop
// // searchApi('pasta')

// useEffect(() => {
// 	searchApi('pasta');
// }, [ ]);

// 	return (
// 		<View>
// 			<SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
// 			{/* <Text>We Have found {results.length} resturants.</Text> */}
// 			{/* <Flatlist data={results} renderItem={(item)=> item.name}/>  */}
// 			{results.map((item) => <Text>{item.name}</Text>)}
// 			{errorMessage ? <Text>{errorMessage}</Text> : null}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;
