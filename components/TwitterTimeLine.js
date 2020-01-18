import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeLine = () => {
  
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="kbsshaiti"
      options={{height: 900, width: 360}}
    />
  );
}

export default TwitterTimeLine;