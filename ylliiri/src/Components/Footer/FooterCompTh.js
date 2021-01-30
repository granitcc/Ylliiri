
import Envelope from "../../assets/svgicon/Footersvgicon/Envelope";

const FooterComponentThird = () => {
    return (
        
        <div className="subscribediv">
        <Envelope/>
        <input
        className="Field"
        type="text"
        placeholder="Enter tour Email address"
        />
     <button className="buttons"> Subsribe</button>
        
     </div>
    )
}

export default FooterComponentThird
