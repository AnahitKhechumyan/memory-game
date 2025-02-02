import "./button.css"
import { SlArrowRightCircle } from "react-icons/sl";


export function Button(props){
    const { children, className, onClick, ...rest } = props
    return (
        <button type="button" className={`ui button {...rest} ${className}`} onClick={onClick} >
        <SlArrowRightCircle  className="icon" />
         { children }   
         </button>
    );  
};