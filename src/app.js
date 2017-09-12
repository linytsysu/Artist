import { StackNavigator } from 'react-navigation';

import Home from './pages/home';
import Editor from './pages/editor';

const ArtistApp = StackNavigator({
  Home: {
    screen: Home,
  },
  Editor: {
    screen: Editor
  },
}, {
  navigationOptions: {
    header: null,
  }
});

export default ArtistApp;