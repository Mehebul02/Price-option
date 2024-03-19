import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu,IoClose  } from "react-icons/io5";

const Navber =()=>{
    const routes = [
        { id: 1, name: "Home", path: "/Home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      const [open,setOpen] =useState()
      
    return(
<nav className="p-6">
    <div className="md:hidden " onClick={()=>setOpen(!open)}>
       
        {
            open === true ?  <IoClose className="text-2xl"></IoClose> :  <IoMenu className="text-2xl "></IoMenu>
        }
   
    </div>
   <ul className={`md:flex absolute ${open?'top-16':'-top-60'} duration-1000 bg-orange-800 text-black p-6 rounded-md`}>
   {
        routes.map(route => <Link key={route.id} route={route}></Link>)
    }
   </ul>
</nav>
        )
}
export default Navber;