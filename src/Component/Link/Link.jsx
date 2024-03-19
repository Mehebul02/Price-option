import PropTypes from 'prop-types';
const Link =({route})=>{
    return(
<div>
<li className="mr-10">
    <a className="text-2xl" href={route.path}>{route.name}</a>
    </li>
</div>
    )
}
export default Link;
Link.propTypes ={
    route:PropTypes.array.isRequired
}