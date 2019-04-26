import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  componentDidMount() {
    this.props.getYouTubeVideos('react tutorials');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search getYouTubeVideos={this.props.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.props.handleVideoListEntryTitleClick.bind(this)}
              videos={this.props.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
