import React, { useState } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import { useFonts } from 'expo-font';
import productsReducer from './store/reducers/products';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';

import cartReducer from './store/reducers/cart';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  
  const [loaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
  if (!loaded) {
    return (
      <AppLoading
      // onFinish={() => setFontLoaded(true)}
        
      />
    );
  }

  return (<Provider store={store}><ShopNavigator /></Provider>); 
}