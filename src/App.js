import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react"
import AddItem from "./AddItem"
import TodoItem from "./TodoItem"

function App() {
  // Formatting the height to deal with iOS screen (nav and address bar)
  const [viewHeight, setViewHeight ] = useState(`100vh`)

  const handleResize = () => {
    setViewHeight(`${window.innerHeight}px`)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return (() => window.removeEventListener("resize", handleResize))
  })

  const appStyle = {
    height: viewHeight
  }

  // To Do Items state
  const [ items, setItems ] = useState([])
  const [ input, setInput ] = useState("")

  const handleChange = (e) => {
        setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input !== "" && !items.includes(input)) { 
      setItems(prev => ([...prev, input]));
      setInput("")
    }
  }

  const deleteItem = (index) => {
    setItems(items.filter((item, idx) => idx !== index))
  }

  useEffect(() => {
    if(localStorage.getItem("items")) {
      setItems(localStorage.getItem("items").split(","))
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem("items", items)
  }, [items])

  return (
    <div className="App" style={appStyle}>
      <div className="List">
        <h1>To Do List</h1>
        <div className="List_items">
          {items.map((item, idx) => 
            <TodoItem 
            todo={item}
            deleteItem={deleteItem}
            key={`${item}${idx}`}
            index={idx}/>
          )}
        </div>
        <AddItem 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}/>
      </div>
    </div>
  );
}

export default App;
