import logo from './logo.svg'; //eslint-disable-line no-unused-vars
import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import BoardList from './component/board/BoardList';  
//라우팅에 필요한 컴포넌트를 import하자
import {Routes, Route, Outlet, Link, NavLink} from 'react-router-dom'; //eslint-disable-line no-unused-vars

function App() {
  return (
    <div className="container-fluid">
      {/* url과  컴포넌트를 연결하기 
          path="url"  element={연결될 컴포넌트}
          가상주소와 컴포넌트 연결을 라우팅이라고 한다 */}
      <Routes>
         <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/board/list" element={<BoardList/>} />  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
