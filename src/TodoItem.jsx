import { useEffect, useState } from "react"
import "./TodoItem.css"

const TodoItem = (props) => {

      // Status Button UI
      const [ status, setStatus ] = useState("pending")

      const handleClick = () => {
            status === "pending" ? setStatus("complete") : setStatus("pending")
      }

      const statusStyle = {}

      status === "pending" ?
      statusStyle.backgroundColor = "yellow" :
      statusStyle.backgroundColor = "green" 

      // Status Message UI
      const [ visible, setVisible ] = useState(false)

      const mouseOver = () => {
            setVisible(true)
      }

      const mouseOut = () => {
            setVisible(false)
      }

      return (
            <div className="TodoItem">
                  <p>{props.todo}</p>
                  <button 
                  className="Button___status" 
                  style={statusStyle} 
                  onClick={handleClick}
                  onMouseOver={mouseOver}
                  onMouseOut={mouseOut}/>
                  { visible && <span>{status}</span> }
                  <button className="Button___delete"
                  onClick={() => props.deleteItem(props.index)} />
            </div>
      )
}

export default TodoItem