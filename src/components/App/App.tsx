
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from '../Editor/Editor.tsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="container">
        <div className="column">
            <div className="category">Категория 1</div>
            <div className="category">Категория 2</div>
            <div className="category">Категория 3</div>
        </div>
        <div className="column">
            <div className="post-title">Заголовок записи 1</div>
            <div className="post-title">Заголовок записи 2</div>
            <div className="post-title">Заголовок записи 3</div>
        </div>
        <div className="column">
            <div className="post-content">Содержание записи ла-ла-ла.</div>
            <Editor />
        </div>
    </div>
    </>
  )
}

export default App
