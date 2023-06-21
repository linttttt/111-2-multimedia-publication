
import Image from "mui-image"
import "./index.css"
import Seal from "./Seal"

export default function PostedStamp({ imgSrc, sealVariant, sealLocation }) {

  // console.log('sealVariant')
  // console.log(sealVariant)
  // sealVariant = sealVariant? (sealVariant-1) : 2
  sealLocation = sealLocation ? sealLocation : { left: "-10px", bottom: "-50px", transform: "rotate(-45deg)" }
   
  // sealVariant = 1
  // sealLocation = { left: "10px", bottom: "-80px", transform: "rotate(45deg)" }

  return (
    <div className="stamp-holder">
      <Stamp imgSrc={imgSrc} />
      <Seal variant={sealVariant} location={sealLocation} />
    </div>
  )
}
function Stamp({ imgSrc }) {
  return (
    <div className="stamp">
      <Image
        duration={0}
        src={imgSrc}
      />
    </div>

  )
}