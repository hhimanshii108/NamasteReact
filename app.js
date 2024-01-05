import React from "react";
import ReactDOM from "react-dom/client";
const Heading = <h1 id="heading"> Heading using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const element = <h2 className="heading">this is normal react element</h2>;

const Title = () => {
  return <h1>This is a title component</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h2>
        {2 + 4}
        {6 + 3}
      </h2>
      {element}
      <h1>functional components</h1>
      <h1>Heading component</h1>
    </>
  );
};
root.render(<HeadingComponent />);
