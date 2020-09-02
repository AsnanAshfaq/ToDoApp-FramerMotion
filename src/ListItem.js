import React from "react";
import "./ListItem.css";
import { motion } from "framer-motion";

function ListItem({ todo, id, deleteTodo }) {
  return (
    <motion.div
      className="container-fluid d-flex justify-content-center mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
          <motion.i
            className="fa fa-minus"
            id={id}
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              deleteTodo(event.target.id);
            }}
            whileHover={{ scale: 1.5, originX:0, color:'black' }}
            transition={{type:"spring",stiffness:499}}
          ></motion.i>
        </div>
      </div>
    </motion.div>
  );
}

export default ListItem;
