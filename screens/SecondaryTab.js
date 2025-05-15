import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA, sortDataByProgress } from './dataUtils';
import { getProgressValues } from './progressStore';
import { ThemeContext } from '../context/ThemeContext';

const AppScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const progressValues = getProgressValues(); // Use shared progress values
  const { themeStyles } = useContext(ThemeContext); // Access themeStyles from ThemeContext

  console.log("Progress Values:", progressValues);

  const sortedData = sortDataByProgress(DATA, progressValues);

  const handlePress = async (item) => {
    setSelectedId(item.id);

    const appLink = item.appLink;
    const webLink = item.link;

    try {
      const canOpenAppLink = await Linking.canOpenURL(appLink);
      if (canOpenAppLink) {
        await Linking.openURL(appLink); // Open the app link
      } else {
        await Linking.openURL(webLink); // Fallback to the web link
      }
    } catch (error) {
      console.error("Error opening link:", error);
    }
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#EEC' : '#CCE';
    const progress = progressValues[item.id];

    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        style={[styles.item, { backgroundColor }]}
      >
        <Image style={styles.appImage} source={item.image} />
        <View style={[styles.progressContainer, themeStyles.progressContainer]}>
          <View style={[styles.progressBar, themeStyles.progressBar, { width: progress * 2 }]} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={styles.viewBox}>
        <Text style={themeStyles.text}>
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
    borderRadius: 10,
  },
  scrollView: {
    marginTop: 150,
    width: 'auto',
    padding: 20,
  },
});

export default AppScreen;
