import {Card, Text} from 'react-native-paper';
import {View, TextInput, Button, FlatList} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };
  return (
    <SafeAreaView>
      <Text>Search Product</Text>
      <TextInput onChangeText={setValue} placeholder="Type something" />
      <Button title="Search" onPress={searchProduct} />
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
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Search;
