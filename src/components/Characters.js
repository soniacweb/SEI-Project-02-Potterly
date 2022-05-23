import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  // const [filter, setFilter] = useState("");
  // const [filterHouse, setFilterHouse] = useState("");
  //   filterHouse: "All",
  //       filterDeathEater: "All",
  //       bloodFilter: "All",
  //       deathEaterFilter: "All",
  //       dumbFilter: "All",

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const id = this.props.match.params.id;
    try {
      fetch(
        "https://www.potterapi.com/v1/characters/?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW"
      );
      const response = await res.data;
      setCharacters(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const bloodFilter = (e) => {
  //   e.preventDefault();
  //   setBloodFilter: e.target.value,
  // }

  // const houseFilter = (e) => {
  //   e.preventDefault();
  //   setHouseFilter: e.target.value,
  //   console.log("filter");
  //   // spells.map(e => { })
  // }

  // const deathEaterFilter = (e) => {
  //   e.preventDefault();
  //   setDeathEaterFilter: e.target.value,
  // }

  // ministryFilter(e) {
  //   e.preventDefault();
  //   this.setState({
  //     ministryFilter: e.target.value,
  //   });
  // }

  // dumbFilter(e) {
  //   e.preventDefault();
  //   this.setState({
  //     dumbFilter: e.target.value,
  //   });
  // }

  // filter(e) {
  //   this.setState({ filter: e.target.value });
  // }
  // console.log("hell");
  // console.log(characters);

  return (
    <div className="fade-in">
      <div className="section">
        <div className="character hero is-fullheight"></div>
      </div>

      <div className="floating">
        <div className="tossing">
          <Link className="column" to="/house">
            <div
              id="housebuttons"
              className="box has-text-centered button is-black center "
            >
              Return to Homepage{" "}
            </div>
          </Link>
        </div>
      </div>

      <form className="form">
        {/* <select onChange={(e) => this.bloodFilter(e)}>
            <option value="All">All</option>
            <option value="pure-blood">Pure-blood</option>
            <option value="half-blood">Half-blood</option>
            <option value="muggle">Muggle</option>
            <option value="muggle-born">Muggle-born</option>
            <option value="squib">Squib</option>
            <option value="half-giant">Half-giant</option>
            <option value="unknown">Unknown</option>
          </select>
          <select onChange={(e) => this.houseFilter(e)}>
            <option value="All">All</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
          <select onChange={(e) => this.deathEaterFilter(e)}>
            <option value="All">All</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select onChange={(e) => this.ministryFilter(e)}>
            <option value="All">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select onChange={(e) => this.dumbFilter(e)}>
            <option value="All">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select> */}
        <input
          type="text"
          // value={query}
          id="search-input"
          placeholder="Search..."
          name="query"
          onChange={this.filter.bind(this)}
          // onChange={(e) => this.handleOnChange(e)}
        />
        <button
          id="searchspells"
          className="button is small is rounded is-black"
        >
          Filter
        </button>
      </form>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {characters
            //ADD THE FITLERS ===========================================================

            // .filter(elem => {
            //     return elem.name.toLowerCase().includes(filter.toLowerCase())
            // })
            // .filter(elem => {
            //     return elem.name.toLowerCase().includes(filter.toLowerCase())
            // })
            // .filter(elem => {
            //     return elem.name.toLowerCase().includes(filter.toLowerCase())
            // })
            // .filter(elem => {
            //     return elem.name.toLowerCase().includes(filter.toLowerCase())
            // })

            .filter((elem) => {
              return elem.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((characters, i) => {
              return (
                <div
                  key={i}
                  className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile"
                >
                  <Link
                    className="char-and-spells"
                    to={`/characters/${characters._id}`}
                  >
                    <div className="btn card has-background-black">
                      <div className="card-content">
                        <p className="has-text-white">{characters.name}</p>
                        {/* <p className="has-text-grey-darker">Type: {characters.house}</p> */}
                        {/* <p className="has-text-grey-darker">Effect: {characters.effect}</p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
