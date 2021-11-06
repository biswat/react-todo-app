import React, {useState, useEffect} from "react"
import "./App.css"

export default function App(){
      const [task, setTask] = useState("");
      const [todo, setTodo] = useState([]);

      function addTodo(event) {
        event.preventDefault();
        setTodo((oldTodo) => {
          return [...oldTodo, task];
        });
        setTask("");
      }

      function delTodo(event){
        var indexOfEvent = todo.indexOf(event.target.value);
        todo.splice(indexOfEvent, 1);
        // list.style.display = "none"
        setTodo((oldTodo) => {
          return [...oldTodo, todo];
        });
      }

      //instead of keydown try wrapping the code in form

    return (
      <div className="App">
        <h1>ToDO App</h1>

        <form onSubmit={addTodo}>
            <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button id="addTodoBtn" type="submit">Add ToDo</button>
        </form>

        <ul>

            {todo.map((task) => {
              return <li className="listStyle"> {task}
               <button onClick={(e) => delTodo(e)} id="removeTodoBtn" value={task}>Remove</button> 
               </li>;
            })}

        </ul>
      </div>
    );
}