import "./App.css";
import Home from "./components/home";
import FavListContext from "./context/favListContext";
import RecentSearchListContext from "./context/recentSearchListContext";

import React, { Component } from "react";

class App extends Component {
  state = {
    favLists: [],
    recentSearchLists: [],
  };

  handleFavLists = (favLists) => {
    this.setState({ favLists });
  };

  handleRecentSearchLists = (recentSearchLists) => {
    this.setState({ recentSearchLists });
  };

  render() {
    return (
      <div className="App">
        <RecentSearchListContext.Provider value={this.state.recentSearchLists}>
          <FavListContext.Provider value={this.state.favLists}>
            <Home
              handleFavLists={this.handleFavLists}
              handleRecentSearchLists={this.handleRecentSearchLists}
            />
          </FavListContext.Provider>
        </RecentSearchListContext.Provider>
      </div>
    );
  }
}

export default App;
