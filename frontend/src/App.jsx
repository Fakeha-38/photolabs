import React from 'react';
import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
// const photos = [...Array(3)].map((_, index) => 
//   <PhotoListItem sampleData={sampleDataForPhotoListItem} key={index} />
// );

// console.log("new array", photos);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      <PhotoList />
    </div>
  );
};

export default App;
