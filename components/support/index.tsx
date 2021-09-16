import React from "react";
import { Collapse } from "antd";
import { DefaultSection } from "../section/index";


const { Panel } = Collapse;



const Support = (data: any) => {
  let supports = data.data;
  function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <DefaultSection>
      <Collapse style={{width:"80%"}} defaultActiveKey={["1"]}>
        {supports.map((support, i) => (
          <Panel header={support.title} key="1">
            <p dangerouslySetInnerHTML={{ __html: htmlDecode(support.content)}}></p>
            
          </Panel>
        ))}
      </Collapse>
    </DefaultSection>
  );
};

export default Support;
