import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from 'redux';
import { Provider, connect } from 'react-redux';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const initialState = {
  isLightOn: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FLIP':
      return {
        ...state,
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class Room extends React.Component {
  state = {
    isLightOn: true
  };

  flipLight = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };

  render() {
    const lightedness = this.state.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLightOn: state.isLightOn
});
const ConnectedRoom = connect(mapStateToProps)(Room);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom /></Provider>, document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
