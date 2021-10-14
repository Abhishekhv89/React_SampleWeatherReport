import React, { Component } from "react";
import http from "../services/httpServices";
import TabConstants from "../constants/tabNames";
import HomeContent from "./home_content";
import SearchContent from "./search_content";
import _ from "lodash";

class Home extends Component {
  state = {
    query: "",
    weather: {},
    isFav: false,
    favLists: [],
    recentSearchLists: [],
    selectedTab: { id: 1, name: "Home" },
    tabs: [],
  };

  componentDidMount = () => {
    const tabs = [
      { id: 1, name: "Home" },
      { id: 2, name: "Favroutes" },
      { id: 3, name: "Recent Search" },
    ];
    this.setState({ tabs });
    this.setState({ recentSearchLists: [] });
  };

  api = {
    key: "d74180b1e425258f4c0adb10d7509700",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  search = async (evt) => {
    const { query, recentSearchLists } = this.state;
    const { key, base } = this.api;

    if (evt.key === "Enter") {
      const { data } = await http.get(
        `${base}weather?q=${query}&units=metric&APPID=${key}`
      );
      
      this.setState({ weather: data });
      recentSearchLists.push(data);
      const recentSearchLists_duplicates = _.uniqBy(recentSearchLists, "id");
      this.props.handleRecentSearchLists(recentSearchLists_duplicates);
      this.setState({ query: "" });
    }
  };

  handleQuery = (query) => {
    const isFav = false;
    this.setState({ query, isFav });
  };

  handleFavroute = (weather) => {
    const { isFav, favLists } = this.state;
    if (!isFav) {
      favLists.push(weather);
      console.log(this.state.favLists);
      this.props.handleFavLists(_.uniqBy(this.state.favLists,"id"));
    } else {
      let favLists = [...this.state.favLists];
      const index = favLists.indexOf(weather);
      favLists.splice(index, 1);
      this.props.handleFavLists(favLists);
      this.state.favLists = [];
    }
    this.setState({ isFav: !isFav });
  };

  handleTabChange = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { weather, query, isFav, tabs, selectedTab } = this.state;
    if (selectedTab.name === TabConstants.HOME)
      return (
        <HomeContent
          weather={weather}
          query={query}
          isFav={isFav}
          tabs={tabs}
          handleQuery={this.handleQuery}
          handleTabChange={this.handleTabChange}
          handleFavroute={this.handleFavroute}
          selectedTab={selectedTab}
          search={this.search}
        />
      );

    if (selectedTab.name === TabConstants.FAVROUTES)
      return (
        <SearchContent
          weather={weather}
          tabs={tabs}
          selectedTab={selectedTab}
          handleTabChange={this.handleTabChange}
          component="fav-list"
        />
      );

    if (selectedTab.name === TabConstants.RECENT_SEARCH)
      return (
        <SearchContent
          weather={weather}
          tabs={tabs}
          selectedTab={selectedTab}
          handleTabChange={this.handleTabChange}
          component="recent-search-list"
        />
      );
  }
}

export default Home;
