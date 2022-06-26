import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Draggable } from "react-beautiful-dnd";
import { Card, Form, Button, Modal } from "react-bootstrap";

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

const DeleteTaskMutation = gql`
  mutation DeleteTaskMutation($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

const TaskCom: React.FC<Task> = ({
  title,
  description,
  id,
  boardCategory,
  index,
}) => {
  const [tastkTitle, setTastkTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [assignTo, setAssginTo] = useState("");
  const [updateTask, { data, loading, error }] =
    useMutation(UpdateTaskMutation);
  const [deleteTask] = useMutation(DeleteTaskMutation);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleTaskUpdate = (event: React.FormEvent<HTMLFormElement>) => {
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

  const handleTaskDelete = () => {
    deleteTask({
      variables: {
        id: id,
      },
    });
  };
  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <Card
            className="task-container"
            onClick={() => handleShow()}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card.Body>{title}</Card.Body>
          </Card>
        )}
      </Draggable>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleTaskUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={tastkTitle}
                onChange={(e) => setTastkTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assign To</Form.Label>
              <Form.Select aria-label="Assign To"></Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TaskCom;
