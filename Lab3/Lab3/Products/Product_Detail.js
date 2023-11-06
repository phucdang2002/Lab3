import {Card, Text, Button} from 'react-native-paper';
import {View} from 'react-native';
import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Detail = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/2';
  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  });
  return (
    <SafeAreaView>
      <Card>
        <Text variant="labelLarge">Product Detail</Text>
        <Card.Cover source={{uri: data.thumbnail}} />
        <Card.Content style={{padding: 10}}>
          <Text variant="headlineLarge">Title: {data.title}</Text>
          <Text>Description: {data.description}</Text>
          <Text>Price: {data.price}</Text>
          <Text>Discount: {data.discountPercentage}</Text>
          <Text>Rating: {data.rating}</Text>
          <Text>Stock: {data.stock}</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </Card.Content>
        <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
          <Button mode="contained" style={{margin: 10}}>Delete</Button>
          <Button mode="contained" style={{margin: 10}}>Cancel</Button>
        </View>
      </Card>
    </SafeAreaView>
  );
};
export default Detail;
