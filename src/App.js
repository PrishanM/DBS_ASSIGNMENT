import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as StoreProvider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import cfgStore, {persistore} from './redux/store/ConfigureStore';
import Root from "./redux/containers";

const store = cfgStore();

const App = () =>  {

  return (
    <SafeAreaView style={{flex:1}}>
      <StoreProvider store={store}>

        <PersistGate loading={null} persistor={persistore}>

          <Root/>

        </PersistGate>

      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
