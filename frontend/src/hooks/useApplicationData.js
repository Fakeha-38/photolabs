import {useReducer, useState} from 'react';

const TOGGLE_FAV = 'TOGGLE_FAV';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


const reducer = (state, action) => {
  console.log("THE action object: ", action);
  switch(action.type) {
    case TOGGLE_FAV:
      if(state.favourites.includes(action.payLoad)) {
        return {
          ...state,
          favourites: state.favourites.filter(item => item !== action.payLoad)
        }
      } else {
        return {
          ...state,
          favourites: [...state.favourites, action.payLoad]
        }
      }
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalPhoto: action.payLoad
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalPhoto: null
      }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};
const initialState = {
  favourites: [],
  isModalOpen: false,
  modalPhoto: null
}
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (photo) => {
    dispatch({type: TOGGLE_FAV, payLoad: photo});
  };
  const openModal = (photo) => {
    dispatch({type: OPEN_MODAL, payLoad: photo});
  }
  const closeModal = () => {
    dispatch({type: CLOSE_MODAL});
  }

  return {
    favourites: state.favourites,
    toggleFav,
    openModal,
    closeModal,
    selectedPhoto: state.modalPhoto,
    isModalOpen: state.isModalOpen
  }
};

export default useApplicationData;