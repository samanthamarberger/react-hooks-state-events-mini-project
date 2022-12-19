import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks, selectedCategory }) {
  function handleDelete(text) {
    const newTasks = tasks.filter((task) => task.text !== text)
    setTasks(newTasks);
  }

  //console.log("tasks", tasks);

  
  
  const components = tasks.map(task => {
    return (
      <Task handleDelete={handleDelete} key={task.text} category={task.category} text={task.text} />
    )
  })
  return (
    <div className="tasks">
      {components}
    </div>
  );
}

export default TaskList;
