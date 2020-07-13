import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyInfo from "./MyInfo";

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
class Example extends React.Component {
  render() {
    return <div>
      <ul>
        <li>Yagnesh</li>
        <li>Vullam</li>
        <li>Hello</li>
      </ul>
    </div>;
  }
}
ReactDOM.render(<MyInfo />,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
