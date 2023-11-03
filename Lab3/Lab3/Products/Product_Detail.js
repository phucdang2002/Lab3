import {Card, Text, Button} from 'react-native-paper';
import {View, FlatList, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detail = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/2';
  useEffect( () => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
    // try {
    //   const response = await fetch(
    //     filePath,
    //   );
    //   const d = await response.json();
    //   return setData(d);
    // } catch (error) {
    //   console.error(error);
    // }
  });
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flex: 4}}>
            <Card>
              <Text variant="labelLarge">Product Detail</Text>
              <Card.Cover source={{uri: item.thumbnail}} />
              <Card.Content style={{padding: 10}}>
                <Text variant="headlineLarge">Title: {item.title}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Discount: {item.discountPercentage}</Text>
                <Text>Rating: {item.rating}</Text>
                <Text>Stock: {item.stock}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
              </Card.Content>
              <Button>Delete</Button>
              <Button>Cancel</Button>
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Detail;
