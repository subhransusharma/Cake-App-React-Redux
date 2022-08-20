import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <NewCakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer /> */}
      <UserContainer />
    </div>
    </Provider>
    
  );
}

export default App;
