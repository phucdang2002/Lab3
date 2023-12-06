import {useState, useEffect} from 'react';
import {View, ScrollView, Image, FlatList, Button} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { createStackNavigator } from "@react-navigation/stack";
// import {NavigationContainer}from"@react-navigation/native";

// const Stack =createStackNavigator();
// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={ProductsScreen}/>
//       <Stack.Screen name="Detail" component={Detail}/>
//     </Stack.Navigator>
//   )
// }
const ProductsScreen = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';
  useEffect(() => {
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
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{fontSize: 50}}>Product List</Text>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{backgroundColor:'#dbdbdb', flexDirection: 'row', alignItems: 'stretch', marginBottom: 10}}>
              <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                source={{uri: item.thumbnail}}
                style={{width: 100, height: 100}}
              />
              </View>
              
              <View style={{flex: 2}}>
                <Text variant='labelLarge'>Title: {item.title}</Text>
                <Text>Description: {item.description} </Text>
                <Text>Price: {item.price} </Text>
                <Text>Discount: {item.discountPercentage} </Text>
                <Text>Rating: {item.rating} </Text>
                <Text>Stock: {item.stock} </Text>
                <Text>Brand: {item.brand} </Text>
                <Text>Category: {item.category} </Text>
                <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Button title='Detail'/>
                  <Button title='Add'/>
                  <Button title='Delete'/>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
// const navigation = () =>{
//   return (
//     <NavigationContainer>
//       <MyStack/>
//     </NavigationContainer>
//   )
// }

export default ProductsScreen;
