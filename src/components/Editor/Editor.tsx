

import './Editor.css'

function Editor(props) {

  const editPromt = (event) => {
    console.log(event.target.value);
    props.setNameOfEditCategory(event.target.value)
  };

  const saveChanges = () => {
    props.saveChangesInPromt();
  };

  return (
    <div className="Editor">
      <input defaultValue={props.nameOfEditCategory} onChange={event => editPromt(event)}></input>
      <button onClick={saveChanges}>Save</button>
    </div>
  )
}

export default Editor
