import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const UpdateTaskMutation = gql`
  mutation UpdateTaskMutation(
    $id: string
    $title: String!
    $description: String!
    $status: String!
    $userId: String!
  ) {
    updateTask(
      id: $id
      title: $title
      description: $description
      status: $status
      userId: $userId
    ) {
      id
      title
      description
      status
    }
  }
`;

const DeleteTaskMutation = gql`
  mutation DeleteTaskMutation($id: string) {
    deleteTask(id: $id)
  }
`;

const TaskCom: React.FC<Task> = ({ title, description, id }) => {
  const [tastkTitle, setTastkTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [assignTo, setAssginTo] = useState("");
  const [updateTask, { data, loading, error }] =
    useMutation(UpdateTaskMutation);
  const [deleteTask] = useMutation(DeleteTaskMutation);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask({
      variables: {
        title: tastkTitle,
        description: taskDescription,
        id: id,
      },
    });
    handleClose();
  };

  return (
    <div>
      <div>
        <div>{title}</div>
      </div>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={tastkTitle}
          onChange={(e) => {
            setTastkTitle(e.target.value);
          }}
        />
        <label>Description</label>
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
        />
        <label>AssignTo</label>
        <input
          type="text"
          value={assignTo}
          onChange={(e) => {
            setAssginTo(e.target.value);
          }}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default TaskCom;
