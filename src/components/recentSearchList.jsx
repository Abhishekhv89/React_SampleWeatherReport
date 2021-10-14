import React, { Component } from "react";
import RecentSearchListContext from "../context/recentSearchListContext";
import { dateBuilder } from "../utils/dateBuilder";

class RecentSearchList extends Component {
  static contextType = RecentSearchListContext;

  state = {
    recentSearchLists: [],
  };

  componentDidMount = () => {
    this.setState({ recentSearchLists: this.context });
  };

  render() {
    const { recentSearchLists } = this.state;
    return (
      <div className="app">
        <div className="main">
          <ul className="list-group">
            {recentSearchLists.map((list) => (
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

export default RecentSearchList;
