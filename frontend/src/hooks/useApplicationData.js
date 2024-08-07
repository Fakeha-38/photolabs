import {useReducer, useState, useEffect} from 'react';

const TOGGLE_FAV = 'TOGGLE_FAV';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_TOPICS = 'SET_TOPICS';

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
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};
const initialState = {
  photoData: [],
  topicData: [],
  favourites: [],
  isModalOpen: false,
  modalPhoto: null
}
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({type: SET_PHOTOS, payload: data})
      });
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({type: SET_TOPICS, payload: data})
      });

  }, []);

  const toggleFav = (photo) => {
    dispatch({type: TOGGLE_FAV, payload: photo});
  };
  const openModal = (photo) => {
    dispatch({type: OPEN_MODAL, payload: photo});
  }
  const closeModal = () => {
    dispatch({type: CLOSE_MODAL, payload: null});
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
    isModalOpen: state.isModalOpen
  }
};

export default useApplicationData;