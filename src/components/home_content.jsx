import React, { Component } from "react";
import { dateBuilder } from "../utils/dateBuilder";
import Favourite from "./fav";
import Tabs from "./tabs";

class HomeContent extends Component {
  render() {
    const { weather, query, isFav, tabs, handleQuery,handleTabChange,selectedTab, search,handleFavroute } = this.props;
    return (
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <div className="main">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => handleQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

          {typeof weather.main != "undefined" ? (
            <div>
              <div className="tabs">
                <Tabs
                  items={tabs}
                  selectedTab={selectedTab}
                  handleTabChange={handleTabChange}
                />
              </div>
              <div className="favroutes m-2">
                <span className="white">Add to Favroute </span>
                <Favourite
                  isFav={isFav}
                  handleFavroute={() => {
                    handleFavroute(weather);
                  }}
                />
              </div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default HomeContent;
