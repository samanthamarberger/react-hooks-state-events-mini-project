import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [categoryDetail, setCategoryDetail] = useState("code");
  
  const renderedCategories = categories.slice(1).map((category) => {
    return (
      <option key={category}>{category}</option>
    )
  });

  function handleDetailChange(e) {
    setDetails(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategoryDetail(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const task= {
      text: details,
      category: categoryDetail
    }
    onTaskFormSubmit(task);
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" onChange={handleDetailChange} name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {renderedCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
