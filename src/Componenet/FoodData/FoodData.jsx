import { use } from "react"
import { Food } from "./Food"

export const FoodData = ({AxiosData}) => {
    const fooddata = use(AxiosData)
    const alldata =fooddata.data
    console.log(alldata)
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
     {
        alldata.map((data ,index) =><Food key={index} data={data}></Food>
        )
     }
     </div>
    </div>
   </>      
  )
} 
