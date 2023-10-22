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
      <textarea value={props.nameOfEditCategory} onChange={event => editPromt(event)}></textarea>
      <button onClick={saveChanges}>Save</button>
    </div>
  )
}

export default Editor
