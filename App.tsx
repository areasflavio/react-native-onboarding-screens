import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { data, type Data } from './src/data/screens';

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const renderItem = ({ item, index }: { item: Data; index: number }) => (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <Image
        source={item.image}
        style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
      />

      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => renderItem({ item, index })}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#f8e9b0',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemTitle: {
    color: '#1b1b1b',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemText: {
    color: '#1b1b1b',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 30,
  },
});
