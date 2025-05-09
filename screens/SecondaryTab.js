import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA, generateProgressValues, sortDataByProgress } from './dataUtils';

const AppScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const [progressValues, setProgressValues] = useState(() => generateProgressValues());

  const sortedData = sortDataByProgress(DATA, progressValues);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#EEC' : '#CCE';
    const progress = progressValues[item.id];

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
            data={sortedData}
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
