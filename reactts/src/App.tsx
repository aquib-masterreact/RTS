
import './App.css'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
      <main className='flex justify-center'>
        <h1 className='heading'>Todo App</h1>
        <Navbar/>
        <AddTodo/>
        <Todos/>
        
      </main>
    </>
  )
}

export default App
