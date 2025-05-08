import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import images from '../assets/images';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: images.youtube,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: images.spotify,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: images.tiktok,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
    image: images.netflix,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
    image: images.whatsapp,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Item',
    image: images.instagram,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
    image: images.facebook,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Eighth Item',
    image: images.discord,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Ninth Item',
    image: images.snapchat,
  },
];

const Item = ({ item, onPress, backgroundColor, progress }) => {
  console.log(`Rendering item: ${item.title}, Progress: ${progress}`); // Debugging

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Image style={styles.appImage} source={item.image} />
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: progress * 2 }]} />
      </View>
    </TouchableOpacity>
  );
};

const AppScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const [progressValues, setProgressValues] = useState(() => {
    // Generate random values
    const randomValues = DATA.map(() => Math.random());
    const total = randomValues.reduce((sum, value) => sum + value, 0);

    // Normalize values to ensure their sum equals 100
    const normalizedValues = randomValues.map((value) => (value / total) * 100);

    // Map normalized values to item IDs
    return DATA.reduce((acc, item, index) => {
      acc[item.id] = Math.round(normalizedValues[index]); // Round to nearest integer
      return acc;
    }, {});
  });

  // Sort the DATA array based on progress values
  const sortedData = [...DATA].sort((a, b) => progressValues[b.id] - progressValues[a.id]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#EEC' : '#CCE';
    const progress = progressValues[item.id]; // Use the stored progress value

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.item, { backgroundColor }]}
      >
        <Image style={styles.appImage} source={item.image} />
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: progress * 2 }]} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewBox}>
        <Text style={styles.titleText}>
          Welcome to the App Screen!{"\n"}
          This is where you can manage your apps.
        </Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={styles.scrollView}>
          <FlatList
            data={sortedData} // Use the sorted data
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleText: {
    fontSize: 24,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  appImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 10,
  },
  viewBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    marginBottom: 20,
    backgroundColor: '#FFe0e0',
    padding: 20,
    borderRadius: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  progressContainer: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 10,
    width: 200, // Fixed width
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10
  },
  scrollView: {
    marginTop: 150,
    width: 'auto',
    padding: 20,
  },
});

export default AppScreen;
