// import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return function(dispatch){
    $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: q,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      dispatch(changeVideoList(items))
      dispatch(changeVideo(items[0]))
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
  //TODO:  Write an asynchronous action to handle a video search!

  };
}
// var handleVideoSearch = (q) => {
//   return function(dispatch){
//     fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${q}&maxResults=5&type="video"&videoEmbeddable="true"')
//     .then((response) => {
//       console.log('I fetch sth <3')
//       if (!response.ok) {
//           throw Error(response.statusText);
//       }
//       return response;
//   })
//   .then((response) => response.json())
//   .then((items) => {
//     dispatch(changeVideoList(items))
//     dispatch(changeVideo(items[0]))
//   })
//   //TODO:  Write an asynchronous action to handle a video search!

//   };
// }
export default handleVideoSearch;

