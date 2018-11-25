import React, { Component } from 'react'
import YouTube from 'react-youtube'
const styles = { flexDirection: 'row', display: 'flex', marginTop: 10,width: '100%',alignItems: 'center'};
export default class ListComponent extends Component {
   
    opts = {
        height: '450',
        width: '640',
        playerVars: {
            autoplay: 0
        }
    };
    
    onStateChange = async (event) => {
        let videoData =  await event.target.getVideoData();
        this.props.onSelect(videoData.video_id);
    }
    onClick = (event,videoId) => {
        this.props.onSelect(videoId);
    }
    render() {
        return (
            <div className="frameContentList">
                {this.props.listVideo.map(item =>
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <button key={item.id} style={styles} onClick ={(event) => this.onClick(event,item.videoId)}>
                        <YouTube
                            opts ={this.opts}
                            onStateChange = { this.onStateChange}
                            videoId={item.videoId}
                            className="videoList"
                        />
                        <p className="frameName">{item.name}</p>
                    </button>
                )}
            </div>
        )
    }
}
