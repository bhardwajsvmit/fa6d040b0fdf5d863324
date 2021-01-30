import React from 'react'
import { View, Text , FlatList, StyleSheet} from 'react-native'

export default function Pages({data}) {

    const {
        hits: details,
        page,
    } = data


    return (
       (
        <View>
            <FlatList
            data={details}
            keyExtractor={details=>details.objectID}
            renderItem={({item})=>{
                return(
                    <View style={styles.container}>
            <Text style={styles.text}>Title: {item.title}</Text>
            <Text style={styles.text}>Url: {item.url}</Text>
            <Text style={styles.text}>Created at: {item.created_at}</Text>
            <Text style={styles.text}>Author: {item.author}</Text>
                    </View>
                )
            }}

            />
          <Text style={{ alignSelf: 'center', padding: 40 }}>{page}</Text>
        </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});