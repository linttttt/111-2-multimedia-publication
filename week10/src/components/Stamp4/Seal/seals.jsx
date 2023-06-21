import ntpu_stone from "./img/ntpu-stone.svg"
import b_school from "./img/bschool.svg"
import gate from "./img/gate.svg"
import eagle from "./img/eagle.svg"
import heart_lake from "./img/heart-lake.svg"

// https://developer.mozilla.org/en-US/docs/Web/CSS/margin
// last time
//  const seal = [ntpu_stone, b_school, gate, eagle, heart_lake]

const seals = [
    {
        src: ntpu_stone,
        style: { width: "85%", margin: "0px 0px 5px" }
    },
    {
        src: b_school,
        style: { }
    },
    {
        src: gate,
        style: { height: "80%", margin: "5px" }
    },
    {
        src: eagle,
        style: { height: "70%" }
    },
    {
        src: heart_lake,
        style: { margin: "0px" }
    }]

export default seals;