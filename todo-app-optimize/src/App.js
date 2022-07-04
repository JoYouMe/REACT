import './App.css';
import { useState, useRef, useCallback, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBultTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) { //action에 새로 생긴 todo를 추가
  switch (action.type) {
    case: 'INSERT':
      return todos.concat(action.todo); 
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'CHECKD':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
    default:
      return todos;
  }
}

function App() {
  //초기상태를 undefind로 설정하고 세 번째 파라미터에 초기상태를 만들어주는 함수를 넣어주면 
  //처음 렌더링될 때만 초기상태를 만들어주는 함수를 호출
  const [todos, dispath] = useReducer(todoReducer, undefined, createBultTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      dispath({ type: 'INSERT', todo }); //새로 만들어진 todo 객체를 dispath에 넣어줌
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      dispath({ type: 'REMOVE', id });
    },
    [todos],
  );

  const onChecked = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          //불변성을 지키기위해 원본 todo의 값을 변경하지 않고
          //todo를 복제한 새로운 todo객체를 만들어서 return
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
    </TodoTemplate>
  );
}

export default App;
