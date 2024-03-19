import PriceOption from "../../assets/PriceOption/PriceIOption";

const PriceOptions =()=>{
    const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "description": "Access to basic gym facilities",
          "price": 29.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "description": "Access to standard gym facilities and group classes",
          "price": 49.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Locker room access",
            "Sauna access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "description": "Access to premium gym facilities, unlimited classes, and personal training sessions",
          "price": 79.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Access to premium facilities (pool, spa, etc.)",
            "Unlimited personal training sessions",
            "Locker room access with towel service"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "description": "Special discount for students with access to basic gym facilities",
          "price": 19.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 5,
          "name": "Couple Membership",
          "description": "Discounted membership for couples with access to standard gym facilities",
          "price": 89.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Locker room access"
          ]
        }
      ]
      
    return(
        <div>
            <h1 className="text-7xl text-center">Best Price in town</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 p-4">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>

    )
}
export default PriceOptions;