import React from "react";
import { Collapse } from "antd";
import { DefaultSection } from "../section/index";


const { Panel } = Collapse;



const Support = (data: any) => {
  let supports = data.data;
  return (
    <DefaultSection>
      <Collapse style={{width:"80%"}} defaultActiveKey={["1"]}>
        {supports.map((support, i) => (
          <Panel header={support.title} key="1">
            <p>{support.content}</p>
          </Panel>
        ))}
      </Collapse>
    </DefaultSection>
  );
};

export default Support;
