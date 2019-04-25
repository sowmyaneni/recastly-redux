// import { combineReducers } from 'redux';
// import currentVideo from './currentVideo.js';
// import videoList from './videoList.js';

// // var rootReducer = (state, actions) => {
// //     if (actions.type === 'CHANGE_VIDEO_LIST') {
// //         state.videos = actions.videos;
// //         return state;
// //     } else if (actions.type === 'CHANGE_VIDEO'){
// //         state.video = actions.video;
// //         return state;
// //     } else{
// //         return state;
// //     }
// // };

// // //TODO: define the root reducer for this app

// // //HINT: you'll need to combine the other two reducers in this
// // //  app into a single reducer using the 'combineReducers' method
// // //  listed above.

// export default combineReducers({
//     currentVideo,
//     videoList
// });


//////////////////////////////////////////////////

import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = () => {
    return combineReducers({
        currentVideo,
        videoList
    })
};



export default rootReducer();