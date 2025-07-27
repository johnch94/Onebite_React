import "./css/App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    content: 'React 공부하기',
    isDone: false  ,
    date : new Date().getTime(),
  },
  {
    id: 1,
    content: '리액트 공부하기',
    isDone: false  ,
    date : new Date().getTime(),
  },
  {
    id: 2,
    content: '피아노 치기',
    isDone: false  ,
    date : new Date().getTime(),
  }
];

function App() {
 
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      content : content,
      isDone : false,
      date : new Date().getTime(),
    }
    setTodos([...todos, newTodo])
  }

  const onUpdate = (targetId) =>{
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo));
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App