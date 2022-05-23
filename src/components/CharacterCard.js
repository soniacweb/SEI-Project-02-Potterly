import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CharacterCard = () => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const id = this.props.match.params.id;
    try {
      fetch(
        `https://www.potterapi.com/v1/characters/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`
      );
      const response = await res.data;
      setCharacter(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const capitlizeString = () =>  word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <section className="single-character hero is-fullheight">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <p id="first-subtitle" className="title">
                  Role: {character.role}
                </p>
                <p id="subtitle" className="subtitle">
                  School: {character.school}
                </p>
              </article>
              <article className="tile is-child notification">
                {/* capitalise the first letter */}
                <p id="subtitle" className="title ">
                  Species: {character.species}
                </p>
                <p id="subtitle" className="title">
                  Blood Status: {character.bloodStatus}
                </p>
                {/* <p className="subtitle">{character.house}</p> */}
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              {/* <p className="title">Wide tile</p> */}
              <p className="subtitle">
                Member of Minstry of Magic:{" "}
                {character.ministryOfMagic ? "Yes" : "No"}
              </p>
              <p className="subtitle">
                In the Order of the Pheonix:{" "}
                {character.orderOfThePhoenix ? "Yes" : "No"}
              </p>
              <p className="subtitle">
                In Dumbledore's Army? {character.dumbledoresArmy ? "Yes" : "No"}
              </p>
              <p className="subtitle">
                Death Eater: {character.deathEater ? "Yes" : "No"}
              </p>
              <p className="subtitle">
                Are they Animagus? {character.animagus ? "Yes" : "No"}{" "}
              </p>
              <p className="subtitle">Animagus Form: {character.animagus} </p>
              {/* <p className="subtitle">The famous Wand-Maker, Olivander, Recommends: {character.dateofbirth}</p>
                <p className="subtitle">Worst Fear in Boggart form: {character.boggart}</p>
                <p className="subtitle">Are they Animagus? {character.animagus ? 'Yes' : 'No'} </p>
                <p className="subtitle">Animagus Form: {character.animagus} </p>  */}
              <div className="content">{/* <!-- Content --> */}</div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="character tile is-child notification">
            <div className="content">
              <p id="largersubtitle" className="title">
                {character.name}
              </p>
              {/* if statement to return no known aliass */}
              <p id="subtitle" className="title">
                {" "}
                {character.house} House{" "}
              </p>
              <div className="content">
                <div className="tile is-parent">
                  <article className="spare-background tile is-child notification">
                    <figure className="image is-4by4">
                      <img
                        id="character-card"
                        src="https://i.imgur.com/vbPeNlI.jpg"
                      />
                      <p id="largersubtitle2" className="subtitle">
                        The famous Wand-Maker, Olivander, Recommends:{" "}
                        {character.wand} for {character.name}{" "}
                      </p>
                      <p id="largersubtitle" className="subtitle">
                        A boggart takes the form of your worst fears. When{" "}
                        {character.name} first encountered one, the Boggart
                        revealed (a).. {character.boggart}
                      </p>
                    </figure>
                  </article>
                </div>
                {/* <!-- Content --> */}
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="floating2">
        <div className="tossing2">
          <Link to="/characters">
            <div
              id="returntocharacters"
              className="box has-text-centered button is-black center"
            >
              Return to Characters
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CharacterCard;
