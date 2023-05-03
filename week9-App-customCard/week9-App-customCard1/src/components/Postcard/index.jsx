import "./index.css";
import stampBackground from "./vector.svg";
import signShape from "./vector2.svg";
import footer from "./tree.svg";
import Image from "mui-image";
import { Button, IconButton } from '@mui/material';

export function Postcard({users}) {
  var { recipient, date, grade, major, imgSrc, wish } = users
  return (
      <div className="postcard-short">
          <div className="cardInfo">
              <div className="top">
                  <IconButton>
                      <div className="card-stamp">
                          <div className="stamp-backgraund">
                              <img src={stampBackground} />
                          </div>
                          <div className="stamp-image" />
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
                  </IconButton>
                  <div className="top-info">
                      <div className="recipient-name">To: {recipient}</div>
                      <div className="date">{date}</div>
                  </div>
              </div>
              <div className="content">
                  <div className="content-text">{wish}</div>
              </div>
          </div>
          <div className="footer">
            <Image
                duration={0}
                src={imgSrc}
                width="100%"
                height="100%"
                fit="fill"
                />
          </div>
      </div>

  )
}

