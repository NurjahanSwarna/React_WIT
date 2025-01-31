
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Page from './Pages/Pages';
import Product from './Pages/Products';
import Blogg from './Pages/Blog';
import RootLayout from './Components/RootLayout';
import Contact from './Pages/Contact'
import Shop from './Pages/Shop';
import CurtPage from './Pages/CurtPage';
import SignUp from './Pages/SignUp';


function App() {
  // BrowserRouter setup with routes
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Pages" element={<Page />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Blog" element={<Blogg />} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path="/Login" element={<Contact/>} />
          <Route path="/SignIn" element={<SignUp/>} />
          <Route path ="/Curt" element={<CurtPage/>}/>
        </Route>
      </>
    )
  );

  return <RouterProvider router={myRouter} />;
}

export default App;
