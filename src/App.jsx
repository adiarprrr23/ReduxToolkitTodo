// import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <AddTodo />
      <div className='flex flex-wrap gap-y-3'>
        {todos.map((todo)=>(
          <div key={todo.id} className='w-full'>
            <Todos todo={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
