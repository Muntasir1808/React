import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from './TabButton.jsx';

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
  return (<section id="examples">
    <h2>Examples</h2>
    <menu>
      {/* <TabButton>Components</TabButton> */}
      <TabButton
        isSelected={selectedTopic === "components"}
        onSelect={() => {
          handleSelect("components");
        }}
      >
        Components
      </TabButton>
      {/* we can also write a label prop like this. See in the TabButton.jsx*/}
      {/* <TabButton label='Components'/>  */}
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onSelect={() => {
          handleSelect("jsx");
        }}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onSelect={() => {
          handleSelect("props");
        }}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onSelect={() => {
          handleSelect("state");
        }}
      >
        State
      </TabButton>
    </menu>
    {/* Dynamic Content */}
    {/* {selectedTopic}; */}
    {tabContent}
  </section>);
}