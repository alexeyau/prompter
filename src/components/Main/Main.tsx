import { useState } from 'react';

import Editor from '../Editor/Editor';
import './Main.css';

function Main() {
  const [category, setCategory] = useState(
    [
      {name: "ChatGPT", id: 0, priority: 5},
      {name: "Midjourney", id: 1, priority: 5},
      {name: "Leonardo AI", id: 2, priority: 5},
      {name: "Yandex GPT 2", id: 3, priority: 5}, 
    ]
  );

  const posttitle: any = ["Test prompt", "La-la-la prompt", "English poetry short"];

  const [setNameOfNewCategory, setsetNameOfNewCategory]: any = useState("");

  const changeNameOfNewCategory = (event) => {
    setsetNameOfNewCategory(event.target.value);
  };

  const addNewCategory = () => {
    if(setNameOfNewCategory.length < 1) return;
    setCategory(prev => [...prev, {name: setNameOfNewCategory, id: prev.length}]);
    setsetNameOfNewCategory("");
  };

  const deleteNewCategory = (event) => {
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

  return (
    <div className="Menu p-3">
      <div className="flex">
        <div className="column">
          {category.map((item, index) => (
            <div className='list-category'>
              <div className="category" key={item.id}>{item.name}</div>
              <button id={index} onClick={event =>deleteNewCategory(event)}>✕</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, true)}>↑</button>
              <button id={index} onClick={(event) =>changeCategoryInList(event, false)}>↓</button>
            </div>
          ))}
          <div className="new-category">
            <input onChange={(event) => changeNameOfNewCategory(event)} value={setNameOfNewCategory}></input>
            <button onClick={addNewCategory}>New</button>
          </div>
        </div>
        <div className="column">
          {posttitle.map((title: string, index: number) => (
            <div className="post-title" key={index}>{title}</div>
          ))}
        </div>
        <div className="column">
            <div className="post-content">Содержание записи ла-ла-ла.</div>
            <Editor />
        </div>
      </div>
    </div>
  )
}

export default Main