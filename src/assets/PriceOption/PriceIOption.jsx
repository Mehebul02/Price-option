const PriceOption =({option})=>{
    const {name,price,features}=option

    return( 
<div className="bg-cyan-600 rounded-md p-2 text-white">
    <h1 className="text-center">
        <span className="text-7xl font-extrabold ">{price}</span>
        <span className="text-3xl">/mon</span>
    </h1>
    <h4 className="text-3xl text-center my-4">{name}</h4>
    {
        features.map(feature =><li>{feature}</li>)
    }

</div>
    )
}
export default PriceOption;