import React from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "../components/Header";

const AllTaskQuery = gql`
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`;

type boardProps = {};

const board: React.FC<boardProps> = () => {
  const { data, loading, error } = useQuery(AllTaskQuery, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default board;
