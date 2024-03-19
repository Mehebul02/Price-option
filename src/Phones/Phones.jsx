import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Phones =()=>{
    const [phones,setPhones] = useState([])
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
        })
    },[])
    return (
<div>
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