import "./index.css";
import stampBackground from "./vector.svg";
import signShape from "./vector2.svg";
import footer from "./tree.svg";
import Image from "mui-image";
import { Button, IconButton } from '@mui/material';

export function Postcard({user}) {
  var { recipient, date, grade, major, imgSrc, wish } = user
  return (
      <div className="postcard-short">
          <div className="cardInfo">
              <Top imgSrc={imgSrc} grade={grade} major={major} recipient={recipient} date={date}/>
              <Content wish={wish}/>
          </div>
          <Footer />
      </div>

  )
}

function Top({imgSrc, grade, major, recipient, date}) {
    return (
        <div className="top">
            <IconButton>
                <Stamp imgSrc={imgSrc} grade={grade} major={major}/>
            </IconButton>
            <div className="top-info">
                <div className="recipient-name">To: {recipient}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    )
}

function Stamp({imgSrc, grade, major}) {
    return (
        <div className="card-stamp">
            <div className="stamp-backgraund">
                <img src={stampBackground} />
            </div>
            <div className="stamp-image" >
                <Image
                    duration={0}
                    src={imgSrc}
                    width="100%"
                    height="100%"
                    fit="fill"
                />
            </div>
            <div className="sign-info">
                <div className="sign-shape">
                    <img src={signShape} />
                </div>
                <div className="sign-text">
                    <div className="sign-grade">{grade}</div>
                    <div className="sign-major">{major}</div>
                </div>
            </div>
        </div>
    )
}

function Content({wish}) {
    return (
        <div className="content">
            <div className="content-text">{wish}</div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <Image
                duration={0}
                src={footer}
                width="100%"
                height="100%"
                fit="fill"
            />
        </div>
    )
}