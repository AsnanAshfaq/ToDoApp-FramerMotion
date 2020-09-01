import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import ListItem from "./ListItem";
import ReactLoading from "react-loading";

function App() {
  const [Input, setInput] = useState("");

  useEffect(() => {
    console.log("i am the use effect function ");
  }, []);

  return (
    <div className="app">
      <div className="container-fluid  d-flex flex-column">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1 className="text-light Pacifico-Font m-2">To Do App </h1>
          </div>
        </div>
        {/* input to add todo's 🥇 */}
        <div className="container-fluid mt-3 mx-2">
          <div className="row mx-4 d-flex justify-content-center">
            <div className="col-7 mx-4 p-0">
              <input
                type="text"
                className="form-control w-100 Satisfy"
                style={{ fontSize: 18 }}
                placeholder="Enter today's task"
                value={Input}
                onChange={(event) => setInput(event.target.value)}
              />
            </div>
            <div className="col-1 m-0 p-0">
              <button
                className="btn  w-100 Merriweather"
                style={{
                  fontSize: 18,
                  backgroundColor: "#ADB7b8",
                  color: "black",
                }}
                disabled={!Input}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {/* list of todo 🚀 */}
        <div>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        {/* a beautiful loading component ❤️ 🎵 */}
        <div className="d-flex justify-content-center">
          <ReactLoading
            type={"bubbles"}
            color={"#ffffff"}
            delay={500}
            height={"10%"}
            width={"10%"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
