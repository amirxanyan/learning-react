import { useContext } from "react";
import Context from '../../Context';

function CountCard() {
    const {count} = useContext(Context)
    return(
        <p className="count">{count}</p>
    )
}
export default CountCard;