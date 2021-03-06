import React from 'react';
import PlayListItem from '../playListItem/PlayListItem';
import './playList.scss';

const PlayList = ({ videos, title, handleDeleteVideo}) => {
    const renderedList = videos.map((video, index) => {
        return <PlayListItem handleDeleteVideo={handleDeleteVideo} key={index} video={video} />
    });

    return (
        <div>
            {videos && <div className='playList'>
                <div className='playlist__title'>{title}</div>
                <div>{renderedList}</div>
            </div>}
        </div>
    )
};
export default PlayList;