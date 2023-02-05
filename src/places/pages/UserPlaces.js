import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empite State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://images.pexels.com/photos/2019546/pexels-photo-2019546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empite State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://images.pexels.com/photos/2019546/pexels-photo-2019546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
