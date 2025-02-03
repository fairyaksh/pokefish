import React from "react";

const FishCard = ({
  Genus,
  Species,
  FBname,
  Vulnerability,
  Length,
  Dangerous,
  Electrogenic,
  Comments,
  image,
  hidden,
}) => {
  if (!Genus) {
    return <h3 className="loading">...Loading</h3>;
  }
  return (
    <article className={hidden ? "hidden card" : "card"}>
      <h2>{FBname}</h2>
      <h3>
        {Genus} {Species}
      </h3>
      <img src={image} alt="fish pic" />
      <fieldset>
        <legend>Stats</legend>
        <dl>
          <li className="stats">
            <span role="img" aria-label="">
              🔥
            </span>
            <span role="img" aria-label=""></span> Danger: {Dangerous}
          </li>
          <li className="stats">
            {" "}
            <span role="img" aria-label="">
              🥀
            </span>{" "}
            Vulnerability: {Vulnerability}
          </li>
          <li className="stats">
            {" "}
            <span role="img" aria-label="">
              📏
            </span>{" "}
            Length: {Length} cm
          </li>
          <li className="stats">
            <span role="img" aria-label="">
              ⚡
            </span>{" "}
            Lightning magic: {Electrogenic}
          </li>
        </dl>
      </fieldset>
      <h3>Description:</h3>
      <p
        className="card__p--description"
        dangerouslySetInnerHTML={{ __html: Comments }}
      />
    </article>
  );
};

export default FishCard;
