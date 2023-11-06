import {useState, useEffect} from 'react';
import {Alert, View, TextInput, Button} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successful');
  };

  return (
    <SafeAreaView>
      <Text variant='headlineLarge' style={{color: '#0078D7'}}>Add a Product</Text>
      <Text variant='labelLarge'>Title</Text>
      <TextInput onChangeText={setTitle} placeholder="Enter title" />
      <Text variant='labelLarge'>Description</Text>
      <TextInput onChangeText={setDescription} placeholder="Enter description" />
      <Text variant='labelLarge'>Price</Text>
      <TextInput onChangeText={setPrice} placeholder="Enter price" />
      <Text variant='labelLarge'>Discount Percentage</Text>
      <TextInput onChangeText={setDiscountPercentage} placeholder="Enter discount percentage" />
      <Text variant='labelLarge'>Rating</Text>
      <TextInput onChangeText={setRating} placeholder="Enter rating" />
      <Text variant='labelLarge'>Stock</Text>
      <TextInput onChangeText={setStock} placeholder="Enter stock" />
      <Text variant='labelLarge'>Brand</Text>
      <TextInput onChangeText={setBrand} placeholder="Enter brand" />
      <Text variant='labelLarge'>Category</Text>
      <TextInput onChangeText={setCategory} placeholder="Enter category" />
      <Text variant='labelLarge'>Images</Text>
      <TextInput onChangeText={setImages} placeholder="Enter images URL(s)" />
      <Button title='submit' onPress={handleSubmit}/>
    </SafeAreaView>
  );
};
export default Add;
