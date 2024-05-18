import React from "react";

function CategoryFilter({ categories, tasks, onFilter }) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  React.useEffect(() => {
    onFilter(selectedCategory);
  }, [selectedCategory, onFilter]);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.text} className={task.category === selectedCategory ? "selected" : ""}>
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;