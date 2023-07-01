import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SecondPage from './components/SecondPage';
import RefComponent from './components/RefComponent';
import ControllerComponent from './components/ControllerComponent';
import CounterComponent from './components/CounterComponent';
import TodoList from './components/TodoList';
import ReducerComponent from './components/ReducerComponent';
import ProductsComponent from './components/ProductsComponent';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <img src={logo} className="w-96" alt="logo" />
        <h1 className="text-4xl font-bold">Desarrollo web con React - IECA</h1>
        <div className="flex gap-4">
          <Link to="/hola-mundo" className=''>Hola mundo</Link>
          <Link to="/otra-ruta" className=''>Otra ruta</Link>
          <Link to="/ref" className=''>Hook ref</Link>
          <Link to="/controller-component" className=''>Componente controlado</Link>
          <Link to="/contador" className=''>Hook personalizado</Link>
          <Link to="/todo" className="font-bold text-2xl text-blue-700">
            Lista Todo
          </Link>
          <Link to="/reducer" className="font-bold text-2xl text-blue-700">
            HookReducer
          </Link>
          <Link to="/productos" className="font-bold text-2xl text-blue-700">
            Products Component
          </Link>
        </div>
        <Routes>
          <Route path="/hola-mundo" exact element={<HelloWorld />} />
          <Route path="/otra-ruta" exact element={<SecondPage />} />
          <Route path="/ref" exact element={<RefComponent />} />
          <Route path="/controller-component" exact element={<ControllerComponent />} />
          <Route path="/contador" exact element={<CounterComponent />} />
          <Route path="/todo" exact element={<TodoList />} />
          <Route path="/reducer" exact element={<ReducerComponent />} />
          <Route path="/productos" exact element={<ProductsComponent/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
