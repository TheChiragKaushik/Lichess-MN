import Header from './components/Header'
import { useEffect } from "react";
// import { fetchLichessData } from "./api";
import { Outlet } from 'react-router-dom';


function App() {

  useEffect( () => {
    const data = async () => {
      // const nData = await fetchLichessData("player")
      // console.log(nData)
      // console.log(nData.bullet)
    }
    data()
  },[])
  return (
    <>
    <Header/>
    <Outlet />
    </>
  );
}

export default App;
