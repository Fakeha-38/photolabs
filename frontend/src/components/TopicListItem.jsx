import React from "react";
import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({topic, navigateTopic}) => {
  // console.log("topic object from topic list item: ", topic);
  return (
    <div className="topic-list__item">
      <span onClick={() => navigateTopic(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
