import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        {/* <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul> */}
        {/* We can write the above code within these lines */}
        <ul>
          {CORE_CONCEPTS.map((concetpItem) => (
            <CoreConcept key={concetpItem.title} {...concetpItem} />
          ))}
        </ul>
      </section>
    );
}