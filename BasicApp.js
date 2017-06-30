import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from './LoginComponent';
import ListNewslettersComponent from './ListNewslettersComponent';

const BasicApp = StackNavigator({
  Home: {screen: LoginComponent},
  Profile: {screen: ListNewslettersComponent},
});
