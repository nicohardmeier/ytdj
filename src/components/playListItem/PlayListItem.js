import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './playListItem.scss';

const PlayListItem = ({ video, handleDeleteVideo}) => {
    const selectedVideos = useSelector(state => state.selectedVideos)
    const dispatch = useDispatch();
    const addToMainPLaylist = video => {
        if (!selectedVideos.includes(video))
        dispatch({ type: 'ADD_VIDEO', payload: video })
    }
    return (
        <div className='playlist__item__container'>
            <div className='playlist__item__image__container'>
                <img src={video.snippet.thumbnails.default.url} alt='item searched' />
            </div>
            <div className='playlist__item__title'>
                <p><span>{video.snippet.title}</span></p>
            </div>
            <div className='playlist__item__buttons'>
                <i onClick={() => addToMainPLaylist(video)} className="fas fa-plus"></i>
                <i onClick={() => handleDeleteVideo(video)} className="fas fa-trash"></i>
            </div>
        </div>
    )
};
export default PlayListItem;