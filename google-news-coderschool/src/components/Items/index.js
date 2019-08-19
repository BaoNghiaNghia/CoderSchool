
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

const Item = ({ item }) => {
    return (
      <Card
        title={item.title}
        image={{ uri: item.urlToImage }}
      >
        <View style={styles.row}>
          <Text style={styles.label}>
            Source
            </Text>
          <Text style={styles.info}>
            {item.source.name}
          </Text>
        </View>
        <Text>{item.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>
            Published
            </Text>
          <Text style={styles.info}>
            {item.publishedAt}
          </Text>
        </View>
        <View style={styles.button}>
            <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
        </View>
      </Card>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      justifyContent: 'center'
    },
    label: {
      fontWeight: 'bold'
    },
    info: {
      fontWeight: '400'
    },
    button: {
        marginTop: 20
    }
  });

  export default Item