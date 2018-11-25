import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    onReady (event){
        // event.target.pauseVideo();
        event.target.playVideoAt(50);
    }
    onPlay = (event) => {
        event.target.playVideoAt(50);
    }
    render() {
        const { item } = this.props
        return (

            <div>
                <div key={item.id}>
                    <YouTube
                        videoId={item.videoId}
                        opts={this.opts}
                        onReady={this.onReady}
                        onPlay = {this.onPlay}
                        className="video"
                    />
                    <p className="frameName">{item.name}</p>
                </div>

            </div>
        )
    }
}
