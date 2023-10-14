
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from '../Editor/Editor.tsx'
import Footer from '../Footer/Footer.tsx'
import Menu from '../Menu/Menu.tsx'
import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen bg-slate-50">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>


      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Menu />

      <div className="flex">
        <div className="column">
            <div className="category">ChatGPT</div>
            <div className="category">Midjourney</div>
            <div className="category">Leonardo AI</div>
            <div className="category">Yandex GPT 2</div>
        </div>
        <div className="column">
            <div className="post-title">Test prompt</div>
            <div className="post-title">La-la-la prompt</div>
            <div className="post-title">English poetry short</div>
        </div>
        <div className="column">
            <div className="post-content">Содержание записи ла-ла-ла.</div>
            <Editor />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App
