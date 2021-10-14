import React, { Component } from "react";
import FavListContext from "../context/favListContext";
import { dateBuilder } from "../utils/dateBuilder";

class FavList extends Component {
  static contextType = FavListContext;

  state = {
    favLists: [],
  };

  componentDidMount = () => {
    console.log(this.context);
    this.setState({ favLists: this.context });
  };

  render() {
    const { favLists } = this.state;
    return (
      <div className="app">
        <div className="main">
          <ul className="list-group">
            {favLists.map((list) => (
              <li key={list} className="list-group-item">
                <div className="location-box">
                  <div className="location">
                    {list?.name}, {list?.sys?.country}
                  </div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(list?.main?.temp)}°c
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FavList;
