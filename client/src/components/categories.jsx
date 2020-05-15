import React from "react";
import { Link } from "react-router-dom";

export default function ShowCategories(props) {
  return (
    <div>
      <h2>Categories</h2>
      {props.categories.map((category) => (
        <React.Fragment key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
          <button
            onClick={() => {
              props.history.push(`/categories/${category.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.handleCategoryDelete(props.currentUser.id, category.id);
            }}
          >
            Delete
          </button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/categories/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
