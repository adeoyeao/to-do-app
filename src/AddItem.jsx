import "./AddItem.css"

const AddItem = (props) => {

      return (
            <form className="AddItem" onSubmit={(e) => props.handleSubmit(e)}>
                  <input 
                  type="text"
                  name="newItem"
                  value={props.input}
                  placeholder="Next Item"
                  autoComplete="off"
                  onChange={(e) => props.handleChange(e)}/>
                  <button type="submit" className="Button___submit">Add</button>
            </form>
      )
}

export default AddItem