const Navber =()=>{
    const routes = [
        { id: 1, name: "Home", path: "/Home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
    return(
<nav>
   <ul className="flex text-center">
   {
        routes.map(route => <li className="mr-10"><a href={route.path}>{route.name}</a></li>)
    }
   </ul>
</nav>
        )
}
export default Navber;