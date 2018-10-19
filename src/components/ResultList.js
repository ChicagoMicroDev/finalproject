import React from "react";

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
      <p>{result.volumeInfo.title}</p>
      <p>By: {result.volumeInfo.authors}</p>
        <img
          alt="http://southowalkabout.com/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg"
          className="img-fluid"
          src={result.volumeInfo.imageLinks.smallThumbnail}
        />
      </li>
    ))}
  </ul>
);

export default ResultList;
