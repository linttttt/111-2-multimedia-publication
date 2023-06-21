import "./index.css";
import background from "./background.svg";
import stampBackground from "./vector.svg";
import imgSrccc from "./stamp-image.svg";
import Image from "mui-image";

export function Postcard2() {
    // var { recipient, date, grade, major, imgSrc, wish } = user
    return (
        <div className="postcard">
            <div className="backgrpund">
                <img src={background} />
            </div>
            <div className="cardInfo">
                <div className="top">
                    <div className="date">
                        <div className="year">
                            <div className="y1">2</div>
                            <div className="y2">0</div>
                            <div className="y3">2</div>
                            <div className="y4">3</div>
                        </div>
                        <div className="month">
                            <div className="m1">0</div>
                            <div className="m2">5</div>
                        </div>
                        <div className="day">
                            <div className="d1">0</div>
                            <div className="d2">5</div>
                        </div>
                    </div>
                    <div className="top-info">
                        <div className="sender">
                            <div className="sender-major">系級</div>
                            <div className="sender-name">
                                <div className="name">收信者</div>
                            </div>
                        </div>
                        <div className="stamp">
                            <div className="stamp-backgraund">
                                <img src={stampBackground} />
                            </div>
                            <div className="stamp-image" >
                                <img src={imgSrccc}/>
                            </div>
                            <div className="sign-info">
                                <div className="sign-shape">
                                    <div className="vector2" />
                                </div>
                                <div className="sign-text">
                                    <div className="sign-grade">二</div>
                                    <div className="sign-major">經濟</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-text">Congratulations on graduating!</div>
                </div>
            </div>
        </div>

    )
  }
