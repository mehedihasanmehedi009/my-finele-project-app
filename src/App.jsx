import axios from 'axios'
import './App.css'
import { Navbar } from './Componenet/nav/Navbar'
import { Recharts } from './Componenet/rechartes/Recharts'
import { Suspense } from 'react'
import { FoodData } from './Componenet/FoodData/FoodData'
 import { Loding } from './Loding';
  const AxiosData = axios.get("foodData.json")
  console.log(AxiosData)
function App() {

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-center'>mehedi hasan</h1>
        
          <Recharts/>
         
         <Suspense fallback={<Loding/>}>
          <FoodData AxiosData={AxiosData}> 
          </FoodData>
         </Suspense>

    </>
  )
}

export default App
