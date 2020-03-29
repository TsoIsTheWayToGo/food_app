import React, { useState, useReducer, useEffect } from 'react';
import { Text, StyleSheet, Image, View, FlatList, Button, TextInput } from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const [result, setResult] = useState(null);

	const getResult = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	// console.log(result.phone);

	return (
		<>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({item}) => {
					return <Image style={styles.image} source={{uri: item}} />;
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export default ResultsShowScreen;
