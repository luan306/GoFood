
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';


const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

const styles = StyleSheet.create({

});
export default App;