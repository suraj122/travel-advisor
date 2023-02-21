import React from "react";

function PlaceDetails({ place }) {
  console.log(place);
  return <div>{place.name}</div>;
}

export default PlaceDetails;
