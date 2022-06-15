import React from "react";
import TaskCom from "./TaskCom";
import { PlusIcon } from "@heroicons/react/solid";
type BoardSectionProps = {
  titile: string;
  tasks: Array<Task>;
};

const BoardSection: React.FC<BoardSectionProps> = ({ titile, tasks }) => {
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
    </div>
  );
};
export default BoardSection;
