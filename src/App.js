import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';

 const Router =createBrowserRouter([
  {path:"",element:<Home/>},
  {path:'home',element:<Home/>},
  {path:'*',element:<h2 className='text-center font-bold  text-3xl'>4 0 4 PAGE NOT FOUND  </h2>},
 ])



function App() {





  return (
    <RouterProvider  router={Router} />
  );
}

export default App;
