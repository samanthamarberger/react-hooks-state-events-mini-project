import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  
  const displayCategories = categories.map((category) => {
    return (
      <button onClick={() => clickCategory(category)} className={selectedCategory === category ? "selected" : null} key={category}>{category}</button> 
    )
  });

  function clickCategory(category) {
    setSelectedCategory(category);
    
  }
  console.log(selectedCategory);
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;


