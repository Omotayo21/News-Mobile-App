import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import NewsList from './general';

const Popular = () => {
  return (
    <ScrollView style={{marginTop:'230px'}}>
      <Text
        style={{
          fontFamily: "Times New Roman",
          fontSize: 25,
          fontWeight: 500,
        
        }}
      >
        Popular blogs post
      </Text>
      <NewsList />
    </ScrollView>
  );
}

export default Popular