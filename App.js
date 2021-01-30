import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Pages from './Pages';

export default function App() {

  const [data, setData] = useState({});
  const [page,setPage]=useState(0)

useEffect(() => {
   setTimeout(() => {
      dataFetch();
      setPage(page + 1)
   }, 10000);
},[page]);

useEffect(() => {
  dataFetch();
  setPage(page + 1)
},[]);

  async function dataFetch(){
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
    let result = await response.json()
    result.hits = [...data.hits || [], ...result.hits]
    setData(result)
    return result;
  }


  return (
    <SafeAreaView style={styles.container}>
      <Pages data={data} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});