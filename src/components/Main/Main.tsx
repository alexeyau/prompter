import { useState } from 'react';

import Editor from '../Editor/Editor';
import './Main.css';

function Main() {
  // const obj = [
  //   {ChatGPT: {id: 0, priority: 0, promts: ["Test prompt", "La-la-la prompt", "English poetry short"]}},
  //   {Midjourney: {id: 1, priority: 0, promts: ["Test prompt", "Test prompt", "Test prompt"]}},
  //   {LeonardoAI: {id: 2, priority: 0, promts: ["La-la-la prompt", "La-la-la prompt", "La-la-la prompt"]}},
  //   {YandexGPT2: {id: 3, priority: 0, promts: ["English poetry short", "English poetry short", "English poetry short"]}},
  // ]


  const [category, setCategory] = useState(
    [
      {name: "ChatGPT", id: 0, priority: 0, promts: ["Test prompt", "La-la-la prompt", "English poetry short"]},
      {name: "Midjourney", id: 1, priority: 0, promts: ["Test prompt", "Test prompt", "Test prompt"]},
      {name: "Leonardo AI", id: 2, priority: 0, promts: ["La-la-la prompt", "La-la-la prompt", "La-la-la prompt"]},
      {name: "Yandex GPT 2", id: 3, priority: 0, promts: ["English poetry short", "English poetry short", "English poetry short"]}, 
    ]
  );

  const [promtsList, setPromtsList] = useState(
    [
      {name: "Test prompt", id: 0},
      {name: "La-la-la prompt", id: 1},
      {name: "English poetry short", id: 2},
    ]
  );

  const [activeCategery, setActiveCategery] = useState([]);

  const [nameOfNewCategory, setNameOfNewCategory] = useState("");
  const [nameOfEditCategory, setNameOfEditCategory] = useState("");
  const [nameOfNewPromt, setNameOfNewPromt] = useState("");
  const [indexOfEditCategory, setIndexOfEditCategory] = useState(null);


  const changeNameOfNewCategory = (event) => {
    setNameOfNewCategory(event.target.value);
  };

  const changeNameOfNewPromt = (event) => {
    setNameOfNewPromt(event.target.value);
  };

  const addNewCategory = () => {
    if(nameOfNewCategory.length < 1) return;
    setCategory(prev => [...prev, {name: nameOfNewCategory, id: prev.length}]);
    setNameOfNewCategory("");
  };

  const addNewPromt = () => {
    if(nameOfNewPromt.length < 1) return;
    setPromtsList(prev => [...prev, {name: nameOfNewPromt, id: prev.length}]);
    setNameOfNewPromt("");
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

  const setActiveCategory = (event) => {
    setActiveCategery(category[event.target.id].promts);
  }


  return (
    <div className="Menu p-3">
      <div className="flex">

        <div className="column">
          {category.map((item, index) => (
            <div className='list-category' key={item.id}>
              <div className="category" id={index} onClick={event => setActiveCategory(event)}>{item.name}</div>
              <button id={index} onClick={event =>deleteCategory(event)}>✕</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, true)}>↑</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, false)}>↓</button>
            </div>
          ))}
          <div className="new-category">
            <input onChange={(event) => changeNameOfNewCategory(event)} value={nameOfNewCategory}></input>
            <button onClick={addNewCategory}>Add</button>
          </div>
        </div>

        <div className="column">
          {activeCategery.map((title: any, index: number) => (
            <div className="post-title" key={index} onClick={event => selectionOfVariable(event)} id={index}>{title}</div>
          ))}
          {/* {activeCategery} */}
          <input onChange={(event) => changeNameOfNewPromt(event)} value={nameOfNewPromt}></input>
          <button onClick={addNewPromt}>Add</button>
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