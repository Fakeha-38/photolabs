import {useReducer, useState, useEffect} from 'react';

const TOGGLE_FAV = 'TOGGLE_FAV';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_TOPICS = 'SET_TOPICS';
const SET_TOPIC_ID = 'SET_TOPIC_ID';

const reducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_FAV:
      if(state.favourites.includes(action.payload)) {
        return {
          ...state,
          favourites: state.favourites.filter(item => item !== action.payload)
        }
      } else {
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        }
      }
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalPhoto: action.payload
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalPhoto: null
      }
    case SET_PHOTOS:
      return {
        ...state,
        photoData: action.payload
      }
    case SET_TOPICS:
      return {
        ...state,
        topicData: action.payload
      }
    case SET_TOPIC_ID:
      return {
        ...state,
        topic_id: action.payload
      }
    // default:
    //   throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};
const initialState = {
  topic_id: null,
  photoData: [],
  topicData: [],
  favourites: [],
  isModalOpen: false,
  modalPhoto: null
}
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {

    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({type: SET_PHOTOS, payload: data})
      })      .catch(error => {
        console.log("API request for PHOTO DATA incomplete; Error occured: ", error);
    });

    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({type: SET_TOPICS, payload: data})
      })
      .catch(error => {
        console.log("API request for TOPIC DATA incomplete; Error occured: ", error);
    });

  }, []);
  useEffect(() => {
    if (state.topic_id){
      fetch(`http://localhost:8001/api/topics/photos/${state.topic_id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: SET_PHOTOS, payload: data})
      })
      .catch(error => {
        console.log("API request AFTER TOPIC NAVIGATION incomplete; Error occured: ", error);
    });
    }
  }, [state.topic_id]);
  const toggleFav = (photo) => {
    dispatch({type: TOGGLE_FAV, payload: photo});
  };
  const openModal = (photo) => {
    dispatch({type: OPEN_MODAL, payload: photo});
  }
  const closeModal = () => {
    dispatch({type: CLOSE_MODAL, payload: null});
  }
  const navigateTopic = (topic_id) => {
    dispatch({type: SET_TOPIC_ID, payload: topic_id});
  }

  // console.log("State photos data/Array: ", state.photoData);
  return {
    topics: state.topicData,
    photos: state.photoData,
    favourites: state.favourites,
    toggleFav,
    openModal,
    closeModal,
    selectedPhoto: state.modalPhoto,
    isModalOpen: state.isModalOpen,
    navigateTopic
  }
};

export default useApplicationData;