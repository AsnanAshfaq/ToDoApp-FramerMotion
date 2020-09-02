import React from "react";
import "./ListItem.css";

function ListItem({ todo, id, deleteTodo }) {
  return (
    <div className="container-fluid d-flex justify-content-center mt-3">
      <div
        className="row w-50 d-flex justify-content-center"
        style={{ backgroundColor: "#375051", borderRadius: 10, padding: 10 }}
      >
        <p
          className="Merriweather text-light m-0 p-0"
          style={{ userSelect: "none", fontSize: 21 }}
          
        >
          {todo}
        </p>
        <div className="ml-4 mt-1">
          <i
            className="fa fa-minus"
            id={id}
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              deleteTodo(event.target.id)
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
