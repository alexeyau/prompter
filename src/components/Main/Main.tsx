import { useState } from 'react';

import Editor from '../Editor/Editor';
import './Main.css';

function Main() {
  const [category, setCategory] = useState(
    [
      {name: "ChatGPT", id: 0, priority: 0},
      {name: "Midjourney", id: 1, priority: 0},
      {name: "Leonardo AI", id: 2, priority: 0},
      {name: "Yandex GPT 2", id: 3, priority: 0}, 
    ]
  );

  const [promtsList, setPromtsList] = useState(
    [
      {name: "Test prompt"},
      {name: "La-la-la prompt"},
      {name: "English poetry short"},
    ]
  );

  const [nameOfNewCategory, setNameOfNewCategory] = useState("");
  const [nameOfEditCategory, setNameOfEditCategory] = useState("");
  const [indexOfEditCategory, setIndexOfEditCategory] = useState(0);


  const changeNameOfNewCategory = (event) => {
    setNameOfNewCategory(event.target.value);
  };

  const addNewCategory = () => {
    if(nameOfNewCategory.length < 1) return;
    setCategory(prev => [...prev, {name: nameOfNewCategory, id: prev.length}]);
    setNameOfNewCategory("");
  };

  const deleteCategory = (event) => {
    let newArr = [...category];
    newArr.splice(event.target.id, 1);
    setCategory(newArr);
  };

  const changeCategoryInList = (event, isPlus) => {
    let newArr = [...category];
    console.log(category)
    isPlus ? newArr[event.target.id].priority++ : newArr[event.target.id].priority--;
    newArr.sort((a, b) => a.priority - b.priority);
    setCategory(newArr);
  };


  const selectionOfVariable = (event) => {
    console.log(event.target.innerHTML)
    setNameOfEditCategory(event.target.innerHTML);
    setIndexOfEditCategory(event.target.id);
  };

  const saveChangesInPromt = () => {
    console.log(indexOfEditCategory, nameOfEditCategory)
    let newArr = [...promtsList];
    newArr[indexOfEditCategory].name = nameOfEditCategory;
    console.log(newArr)
    setPromtsList(newArr);
  };


  return (
    <div className="Menu p-3">
      <div className="flex">

        <div className="column">
          {category.map((item, index) => (
            <div className='list-category'>
              <div className="category" key={item.id}>{item.name}</div>
              <button id={index} onClick={event =>deleteCategory(event)}>✕</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, true)}>↑</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, false)}>↓</button>
            </div>
          ))}
          <div className="new-category">
            <input onChange={(event) => changeNameOfNewCategory(event)} value={nameOfNewCategory}></input>
            <button onClick={addNewCategory}>New</button>
          </div>
        </div>

        <div className="column">
          {promtsList.map((title: any, index: number) => (
            <div className="post-title" key={index} onClick={event => selectionOfVariable(event)} id={index}>{title.name}</div>
          ))}
        </div>

        <div className="column">
            <div className="post-content">Содержание записи ла-ла-ла.</div>
            <Editor nameOfEditCategory={nameOfEditCategory} saveChangesInPromt={saveChangesInPromt} setNameOfEditCategory={setNameOfEditCategory}/>
        </div>

      </div>
    </div>
  )
}

export default Main