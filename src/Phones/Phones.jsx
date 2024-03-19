import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThreeCircles } from 'react-loader-spinner'
const Phones =()=>{
    const [phones,setPhones] = useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData =data.data.data;
            const phoneWithFakeData =phoneData.map(phone =>{
                const obj ={
                    name :phone.phone_name,
                    price :parseInt(phone.slug.split('-')[1])
                }
                console.log(obj)
                return obj
            })
            setPhones(phoneWithFakeData)
            setLoading(false)
        })
    },[])
    return (
<div>
<div >
{loading && <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}
</div>
    <h1 className="text-3xl">Phones :{phones.length}</h1>
    <BarChart width={750} height={440} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
</div>
    )
}
export default Phones;