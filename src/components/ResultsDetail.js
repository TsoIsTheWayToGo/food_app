import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Flatlist, Button, TextInput, ToucableOpacity, Image } from 'react-native';

const ResultsDetail = ({ result }) => {

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} reviews</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    // marginRight: 10,
  },

	image: {
		width: 250,
		height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
  }
});

export default ResultsDetail;
