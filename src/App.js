import {useState} from 'react'


function App(){
  const [notes, setToDoList]= useState([])
  const [memo, setMemo]= useState ([""])

    function setListToDo(e){
      setMemo(e.target.value)
    }

    function NewToDo() {
      setToDoList([...notes, {id: (parseInt(notes.length)+1 ), note:memo, strike:false}])
      
    }

    function strike (e){
      const noteToStrike = notes.filter((x) => (x.id===e.id))
      if (noteToStrike[0].strike ===false) {
        setToDoList(prevState => (prevState.map(x => x.id === e.id ?{...x, strike:true} : x)))

      }else {setToDoList(prevState => (prevState.map (x => x.id === e.id ? {...x, strike:false}: x)))}

    }
    function deleteToDo(){
      const del = notes.filter(note => note.strike === false)
      setToDoList(del)

      console.log(del)
    }
    function clear() {
      setToDoList ([])
    }
    return <div>
      <h1>To Do List: </h1>
      <ul>{notes.map((x)=>
      <li
      onClick = {()=> strike(x)}>
      {x.note}</li>)}
      </ul>
      
        
      <input onChange ={(e)=> setListToDo(e)}/> 
      <button onClick ={()=>NewToDo()}>Submit</button>
      <br/>
      <br/>
      <button onClick ={()=>clear()}>Clear All Page</button>
      <br/>
      <br/>
      <button onClick ={()=> deleteToDo()}>Clear Selected List</button>
    </div>
}
export default App;
