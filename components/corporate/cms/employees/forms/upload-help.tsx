import React, { useEffect } from "react";
import { Timeline } from "antd";

const Help = () => {
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item label="Lorem Ipsum is simply dummy text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Timeline.Item>
        <Timeline.Item label="Lorem Ipsum is simply dummy text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Timeline.Item>
        <Timeline.Item label="Lorem Ipsum is simply dummy text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Timeline.Item>
      </Timeline>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
    </>
  );
};

export default Help;
