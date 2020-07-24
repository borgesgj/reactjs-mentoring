import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent';
import HelloPureComponent from './HelloPureComponent';

function HelloFunctionComponent(props) {
  return <p>- Hello ReactJS using Function Component with mynumber*3={props.mynumber*3}</p>
}

const title = React.createElement('h2', {}, 'ReactJS Task 1');
const helloElement = React.createElement('p', {}, '- Hello ReactJS using React.createElement');
const gitHubLink = React.createElement('a', {href: "https://github.com/borgesgj/reactjs-mentoring.git"}, 'Find me on GitHub');
const mainContainer = React.createElement('div', {style: {margin: "20px"}}, [
  title,
  helloElement, 
  <HelloComponent/>,
  <HelloPureComponent iam="React.PureComponent" mynumber="2"/>,
  <HelloFunctionComponent mynumber="4"/>,
  gitHubLink]);

function App() {
  return (
    mainContainer
  );
}

export default App;
