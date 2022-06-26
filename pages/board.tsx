import React, { useState } from "react";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import Header from "../components/Header";
import BoardSection from "../components/BoardSection";
import { DragDropContext } from "react-beautiful-dnd";

type boardProps = {};
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

const UpdateTaskMutation = gql`
  mutation UpdateTaskMutation(
    $id: String!
    $title: String
    $description: String
    $userId: String
    $status: String
  ) {
    updateTask(
      description: $description
      id: $id
      title: $title
      userId: $userId
      status: $status
    ) {
      id
      title
      description
      status
    }
  }
`;

const board: React.FC<boardProps> = () => {
  const [tasks, setTasks] = useState([]);
  const { data, loading, error } = useQuery(AllTaskQuery, {
    onCompleted: (data) => {
      setTasks(data.tasks);
      console.log(data.tasks);
    },
  });
  const sections: Array<string> = ["To Do", "In Progress", "Review", "Done"];
  const [updateTask] = useMutation(UpdateTaskMutation);
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }
    updateTask({
      variables: {
        id: draggableId,
        status: destination.droppableId,
      },
    });

    const updatedTasksList =
      tasks &&
      tasks.map((t: any) => {
        if (t.id === draggableId) {
          return {
            ...t,
            status: destination.droppableId,
          };
        } else {
          return t;
        }
      });
    setTasks(updatedTasksList);
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="">
          {sections.map((section: string, index: number) => {
            let filteredData: Array<Task> = tasks
              ? tasks.filter((task: Task) => {
                  return task.status === section;
                })
              : [];
            return (
              <BoardSection
                key={section}
                title={section}
                tasks={filteredData}
              ></BoardSection>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default board;
