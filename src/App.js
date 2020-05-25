import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const PLACES = gql`
  query Places {
    places @client {
      id
      location
    }
  }
`

const CREATE_PLACE = gql`
  mutation CreatePlace(
    $location: String!
    $id: ID!
  ) {
     createPlace @client (
       location: $location
       id: $id
     )
  }
`;

export default function App() {
  const {
    loading,
    data
  } = useQuery(PLACES);
  const [createPlace, newPlace] = useMutation(CREATE_PLACE);

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>
      <h2>Places</h2>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {data.places.map(place => (
            <li key={place.id}>{place.location}</li>
          ))}
          <li key="place-creator">
            <span className="create-button"
              onClick={
                e => createPlace({ variables: { id: "check", location: "thisout" }})
              }
            >
              Clicking here will cause the error
            </span>
          </li>
        </ul>
      )}
    </main>
  );
}
