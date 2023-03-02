import React, { useState } from 'react';
import './App.css';

function App() {
  const INIT_OBJUCT = {
    id: 1,
    content: '',
  };
  const [todoLists, setToDoList] = useState([INIT_OBJUCT]);

  return (
    <div className="wrap">
      <AddFrom todoLists={todoLists} setToDoList={setToDoList} />
      <div className="toDo_Container">
        {todoLists.map((item) => (
          <ToDoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function AddFrom({ todoLists, setToDoList }) {
  const [todoContent, setTodoContent] = useState('');

  function onSubmitList(e) {
    e.preventDefault();
    const newList = {
      id: todoLists.length + 1,
      content: todoContent,
    };

    setToDoList([...todoLists, newList]);
  }
  return (
    <div className="container">
      <form onSubmit={(e) => onSubmitList(e)}>
        <input
          onChange={(e) => setTodoContent(e.target.value)}
          type={'text'}
          required
          placeholder="자바스크립트를 배워봅시다."
        />
        <input type={'submit'} value="추가하기" />
      </form>
      <h1>Todo List</h1>
    </div>
  );
}

function ToDoCard({ item }) {
  console.log(item);
  return <div className="toDoCard">가낟라</div>;
}

export default App;
