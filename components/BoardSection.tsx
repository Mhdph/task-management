import React, { useState } from "react";
import TaskCom from "./TaskCom";
import { PlusIcon } from "@heroicons/react/solid";
import AddTaskModal from "../components/AddTaskModal";
import { title } from "process";

type BoardSectionProps = {
  title: String;
  tasks: Array<Task>;
};

const BoardSection: React.FC<BoardSectionProps> = ({ title, tasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleclose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <div>
      {tasks &&
        tasks.map((task: Task, index: number) => {
          return (
            <TaskCom
              title={task.title}
              description={task.description}
              id={task.id}
              key={task.id}
            />
          );
        })}
      {tasks.length > 0 && (
        <button>
          <PlusIcon />
          Add Task
        </button>
      )}
      {tasks.length === 0 && (
        <div>
          <button onClick={handleShow}>
            <PlusIcon />
            Add Task
          </button>
        </div>
      )}
      <AddTaskModal
        boardCategory={title}
        showModal={showModal}
        handleClose={handleclose}
      />
    </div>
  );
};
export default BoardSection;
