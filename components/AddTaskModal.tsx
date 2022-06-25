import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

type AddTaskModalProps = {
  showModal: Boolean;
  handleClose: () => void;
  boardCategory: String;
};

const CreateTaskMutation = gql`
  mutation CreateTaskMutation(
    $id: string
    $title: String!
    $description: String!
    $status: String!
    $userId: String!
  ) {
    createTask(
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
const AddTaskModal: React.FC<AddTaskModalProps> = ({
  showModal,
  handleClose,
  boardCategory,
}) => {
  const [tastkTitle, setTastkTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssginTo] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask({
      variables: {
        title: tastkTitle,
        description: taskDescription,
        status: boardCategory,
      },
    });
    handleClose();
  };

  const [createTask, { loading, data, error }] = useMutation(
    CreateTaskMutation,
    {
      onCompleted: (data) => {
        setTastkTitle("");
        setTaskDescription("");
        setAssginTo("");
      },
    }
  );

  return (
    <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddTaskModal;
