import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import NewsListScreen from './screens/NewsListScreen';
import NewsArticleWebScreen from './screens/NewsArticleWebScreen';

const routes = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Categories',
    }),
  },
  NewsList: {
    screen: NewsListScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title')
    }),
  },
  NewsArticleWeb: {
    screen: NewsArticleWebScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title')
    }),
  }
}

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  mode: 'card',
  headerMode: 'screen',
  //headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FF595E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
    },
  },
}
const RootStack = createStackNavigator(routes, stackNavigatorConfig);

export default RootStack;
