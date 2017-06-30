import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {screen: LoginComponent},
  Profile: {screen: ListNewslettersComponent},
});
