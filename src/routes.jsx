import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Todo } from '@/pages/todo'

export function AllRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Todo />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}