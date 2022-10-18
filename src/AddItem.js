import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  // console.log(inputRef);
  
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
        type="text" 
        id="addItem"
        autoFocus
        placeholder="Add Item"
        required
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button
        type="submit"
        aria-label="addItem"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem;