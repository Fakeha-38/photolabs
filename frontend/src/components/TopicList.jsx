import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = ({topics, navigateTopic}) => {
  const topicsMap = topics.map((topic) => {
    return(
      <TopicListItem key={topic.id} topic={topic} navigateTopic={navigateTopic} />
    )
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicsMap}
    </div>
  );
};

export default TopicList;
