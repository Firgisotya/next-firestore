'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Create from './pages/mahasiswa/Create';
import Edit from './pages/mahasiswa/Edit';
import Index from './pages/mahasiswa/Index';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/mahasiswa" element={<Index/>} />
        <Route path="/mahasiswa/create" element={<Create/>} />
        <Route path="/mahasiswa/edit/:id" element={<Edit/>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}
