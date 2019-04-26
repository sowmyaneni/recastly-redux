
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// var 



// function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }

// var exampleInitialState = {
//     currentVideo: null,
//     videoList: exampleVideoData
// }
// const store = configureStore(exampleInitialState);


const store = createStore(
  rootReducer,
  {videoList: [], currentVideo:null},
  applyMiddleware(thunk)
);

export default store
