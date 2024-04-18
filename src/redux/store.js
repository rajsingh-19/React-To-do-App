import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

// function for managing the states all over the web app by reducer
const store = configureStore({
    reducer: reducer,
});

export default store;
