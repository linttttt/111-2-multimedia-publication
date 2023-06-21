import "./index.css"
import seals from "./seals.jsx"
import Image from "mui-image";

export default function Seal({variant}) {

    variant = variant? (variant-1):2

    console.log('seal variant')
    console.log(seals)
    console.log(location)

   
    return (

        // <div className="seal" style={location}>
        //     <div className="seal-icon">
        //         <img class="seal-color" src={seals[variant].src} style={seals[variant].style} />
        //     </div>
        // </div>
        <div className="sign-info">
                <Image
                    className="seal-color"
                    duration={0}
                    src={seals[variant].src}
                    fit="fill"
                    style={seals[variant].style}
                />
           
        </div>
    )
}
