import React from "react";
import "./App.css";

type FirstProps = {
  inner: {
    type: "First"
  },
  type: "First";
};
const FirstComponent: React.FC<FirstProps> = () => <div />;

type SecondProps = {
  inner: {
    type: "Second"
  },
  type: "Second";
};
const SecondComponent: React.FC<SecondProps> = () => <div />;

const UnionComponent:
  | React.FC<FirstProps>
  | React.FC<SecondProps> = SecondComponent;

type Test = FirstProps | SecondProps;

const test: Test = {
  type: "First",
  inner: { 
    type: 
  }
};

function App() {
  return <UnionComponent />;
}

export default App;
