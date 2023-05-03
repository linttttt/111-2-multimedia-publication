import edit from "./img/edit.svg"
import ig from "./img/ig.svg"
import "./index.css"



export function Banner() {
    return(
        <div className="banner">
            <div className="banner-text">Student / Teacher</div>
        </div>

    )
}

export function Content() {
    return(
        <div className="content"></div>

    )
}

export function Footer() {
    return(
        <div className="footer">
            <div className="icon">
                <div className="edit" >
                    <img src={edit}/>
                </div>
                <div className="ig" >
                    <img src={ig}/>
                </div>
            </div>
        </div>

    )
}