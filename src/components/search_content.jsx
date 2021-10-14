import React, { Component } from "react";
import FavList from "./favList";
import RecentSearchList from "./recentSearchList";
import Tabs from "./tabs";

class SearchContent extends Component {
  render() {
    const { weather, tabs, selectedTab, handleTabChange, component } =
      this.props;
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
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="tabs">
                <Tabs
                  items={tabs}
                  selectedTab={selectedTab}
                  handleTabChange={handleTabChange}
                />
              </div>
              <div className="fav-list">
                {component === "fav-list" ? <FavList /> : <RecentSearchList />}
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

export default SearchContent;
