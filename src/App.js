import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import ListItem from "./ListItem";
import ReactLoading from "react-loading";
import * as firebase from 'firebase'


function App() {

  // some local states 💀☢️
  const [Input, setInput] = useState("");
  const [IncomingData, setIncomingData] = useState({});
  const [isLoading, setisLoading] = useState(true);


  //delte function to delete the todos ❎
  const deleteData = (id) => {
    const rootRef = firebase.database().ref('todoapp-framermotion').child(id)
    rootRef.remove()
    setisLoading(true)
  }


  // add function to add todos to the firesbase ➕
  const addData = (event) => {
    event.preventDefault();
    setisLoading(true)
    // add value to the database 
    const rootRef = firebase.database().ref('todoapp-framermotion')
    rootRef.push(Input)
    // set incoming variable to the response we get from firebase
    rootRef.on('value', (snapShot) => {
      setIncomingData(snapShot.val())
      setisLoading(false)
    })
    setInput("");
  };

  useEffect(() => {
    // make instance of firebase 🥃
    const rootRef = firebase.database().ref('todoapp-framermotion')
    rootRef.on('value', (snapShot) => {
      setIncomingData(snapShot.val())
      setisLoading(false)
    })
    if(Object.keys(IncomingData).length != 0){
      setisLoading(false)
    }
  },[isLoading]);

  return (
    <div className="app">
      {/* Header of the app ☘️ */}
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
                onClick={(event) => addData(event)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {/* list of todo 🚀 */}
        {isLoading === false ? (
          <div>
            {Object.entries(IncomingData).map( ([key, todo]) => (
              <ListItem todo={todo} key={key} id={key} deleteTodo={deleteData}/>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            {/* a beautiful loading component ❤️ 🎵 */}
            <ReactLoading
              type={"bubbles"}
              color={"#ffffff"}
              delay={500}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
