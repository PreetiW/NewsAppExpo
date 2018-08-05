import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class CategoryCard extends Component {
  onCardPress = () => {
    const { data, navigation } = this.props;
    console.log(data.category);
    navigation.navigate('NewsList', {
      title: data.title,
      category: data.category
    });
  }

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity onPress={this.onCardPress}>
        <View style={styles.card}>
          <Image
            resizeMode="cover"
            source={data.imageSource}
          style={styles.imageContainer}/>
          <View style={styles.contentContainer}>
            <Title>{data.title}</Title>
            <Description numberOfLines={3}>
              {data.description}
            </Description>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

/*
export default class Title extends Component {
  render() {
    return (
      <Text>
        {this.props.children}
      </Text>
    )
  }
}
*/
