import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const reducer = (states = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      states = [{ text: action.text, id: Date.now() }, ...states];
      break;
    case DELETE_TODO:
      states = states.filter(state => state.id !== action.id);
      break;
    default:
      break;
  }

  return states;
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (evt) => {
  const id = parseInt(evt.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (evt) => {
  evt.preventDefault();

  const text = input.value;
  input.value = '';
  dispatchAddTodo(text);
};

form.addEventListener('submit', onSubmit);
