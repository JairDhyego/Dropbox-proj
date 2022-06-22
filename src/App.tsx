import React from "react";
import Section from "./components/Section";
import data from "./data";
import SideMenu from "./components/SideMenu/index";
import MenuForm from "./components/MenuForm/index";

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      ></Section>

      <Section
        variant="beige"
        title={data[1].title}
        description={data[0].description}
      ></Section>

      <Section
        variant="blue"
        title={data[2].title}
        description={data[0].description}
      ></Section>

      <Section
        variant="white"
        title={data[3].title}
        description={data[0].description}
      ></Section>

      <Section
        variant="black"
        title={data[4].title}
        description={data[0].description}
      ></Section>
    </>
  );
}

export default App;
