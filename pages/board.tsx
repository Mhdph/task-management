import React from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "../components/Header";
import BoardSection from "../components/BoardSection";

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
  const section: Array<String> = ["To Do", "In Progress", "Review", "Done"];

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header />
      <div className="">
        {section.map((section: String, index: number) => {
          let filteredData: Array<Task> = data
            ? data.task.filter((task: Task) => {
                return task.status === section;
              })
            : [];
          return (
            <BoardSection titile="To Do" tasks={filteredData}></BoardSection>
          );
        })}
      </div>
    </div>
  );
};

export default board;
