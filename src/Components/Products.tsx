import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import { products, Product } from '../Data/data'; // Assuming 'Product' is the type for items in the 'products' array
const Products: React.FC = () => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.product}>
      <Image style={styles.productImage} source={item.image} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49243E',
    marginLeft: 10,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  product: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;
