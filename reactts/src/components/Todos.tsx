import '../App.css'
import { useTodos } from '../Store/addTodo';
import {useSearchParams} from 'react-router-dom'
const Todos = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {todos,toggleTodoCompleted,handleDeleteTodo}  = useTodos();
    const [searchParam] = useSearchParams();
    const todosData:string | null = searchParam.get("todos");
    
    let filterData = todos;

    if(todosData == "active"){
        filterData = filterData.filter((task)=> !task.completed)
    }
    if(todosData == "completed"){
        filterData = filterData.filter((task)=> task.completed)
    }

  return (
    <ul className='todoList'>
      {
        filterData.map((todo)=>{
            return <li  key={todo.id}>
                <input type='checkbox' checked={todo.completed}
                onChange={()=> toggleTodoCompleted(todo.id)}
                />
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                {
                    todo.completed && (
                        <button type='button' className='delbtn'onClick={()=> handleDeleteTodo(todo.id)}>Delete</button>
                    )
                }
            </li>
        })
      }
    </ul>
  )
}

export default Todos
