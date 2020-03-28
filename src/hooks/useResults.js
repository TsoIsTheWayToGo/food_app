import { useEffect, useState } from 'react';
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([]);
  //error handling
  const [errorMessage, setErrorMessage] = useState('');
  // console.log('^');

  // api call
  const searchApi = async searchTerm => {
		// console.log('hi there');
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 10,
					term: searchTerm,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something Went Wrong');
		}
  };

  // const initialData = searchApi('resturant')

  //dont do this it causes infinite loop
  // searchApi('pasta')

  useEffect(() => {
		searchApi('pasta');
  }, []);
  return [searchApi, results, errorMessage]
}