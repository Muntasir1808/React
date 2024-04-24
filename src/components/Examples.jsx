import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  // we must call react hooks inside of a component function and we must call it at the top level of the component function
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      ButtonsContainer="menu"
        buttons={
          <>
            {/* <TabButton>Components</TabButton> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            {/* we can also write a label prop like this. See in the TabButton.jsx*/}
            {/* <TabButton label='Components'/>  */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      
      {/* Dynamic Content */}
      {/* {selectedTopic}; */}
    </Section>
  );
}
