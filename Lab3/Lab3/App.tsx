import { View } from "react-native";
import ProductsScreen from "./Products/Products";
import Add from "./Products/Product_Add";
import Search from "./Products/Product_Search";
import Detail from "./Products/Product_Detail";
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductsScreen', title: 'Products', focusedIcon: 'grid' },
    { key: 'Add', title: 'Add', focusedIcon: 'folder' },
    { key: 'Search', title: 'Search', focusedIcon: 'find' },
    { key: 'Detail', title: 'Detail', focusedIcon: 'calendar' },
  ])
  const renderScene = BottomNavigation.SceneMap({
    ProductsScreen: ProductsScreen,
    Add: Add,
    Search: Search,
    Detail: Detail


  })
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  )
}
export default App;