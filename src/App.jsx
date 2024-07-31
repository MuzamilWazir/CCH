import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="center-container">
        <div className="input-container">
          <input
            type="text"
            className="m-4 p-4 rounded-lg"
            placeholder="Enter your todo"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={handleEnterPress}
          />
          <button
            className=" bg-red-600 m-1 font-semibold p-2 rounded-md w-12  text-zinc-50"
            onClick={() => {
              addList(inputText);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <h1 className=" text-center font-bold m-8 ">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <li className="flex bg-red-600  text-zinc-50 rounded-lg m-4 p-3">
              <span className="ml-2 font-bold">{listItem}</span>
              <span className="ml-48">
                <i
                  className=""
                  onClick={() => {
                    deleteListItem(i);
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faTrashCan} className="icon-delete" />
                </i>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
