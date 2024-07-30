import React from 'react';
import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import TopicList from './components/TopicList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';

// const photos = [...Array(3)].map((_, index) => 
//   <PhotoListItem sampleData={sampleDataForPhotoListItem} key={index} />
// );

// console.log("new array", photos);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div>{photos}</div> */}
      <TopNavigation />
      {/* <TopicList /> */}
      <PhotoList />
    </div>
  );
};

export default App;
