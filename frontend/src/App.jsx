import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
// const photos = new Array(3).fill(<PhotoListItem sampleData={sampleDataForPhotoListItem} key={sampleDataForPhotoListItem.id} />);
const photos = [...Array(3)].map((_, index) => 
  <PhotoListItem sampleData={sampleDataForPhotoListItem} key={index} />
);

// console.log("new array", photos);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div className="photo-list">{photos}</div>
    </div>
  );
};

export default App;
