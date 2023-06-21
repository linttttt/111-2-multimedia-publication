import "./index.css";
import background from "./background.svg";
import stampBackground from "./vector.svg";
import picture from "./stamp-image.svg";
import stamp from "./sign-info.svg";
import Image from "mui-image";
import Seal from "../Stamp4/Seal";
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export function Finalcard({user}) {
    var { sender, date, grade, imgSrc, wish } = user
    var date_sp = Date({date})
    
    return (
        <div className="finalcard">
            <div className="background">
                <img src={background}/>
            </div>
            <div className="cardInfo">
                <div className="top">
                    <div className="date">
                        <div className="year">
                            <div className="date-number">{date_sp[0]}</div>
                            <div className="date-number">{date_sp[1]}</div>
                            <div className="date-number">{date_sp[2]}</div>
                            <div className="date-number">{date_sp[3]}</div>
                        </div>
                        <div className="month">
                            <div className="date-number">{date_sp[4]}</div>
                            <div className="date-number">{date_sp[5]}</div>
                        </div>
                        <div className="day">
                            <div className="date-number">{date_sp[6]}</div>
                            <div className="date-number">{date_sp[7]}</div>
                        </div>
                    </div>
                    <div className="top-info">
                        <div className="sender">
                            <div className="sender-major">{grade}</div>
                            <div className="sender-name">
                                <div className="name">{sender}</div>
                            </div>
                        </div>
                        <div className="stamp-info">
                            <div className="stamp-background">
                                <img src={stampBackground}/>
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
                            <Seal variant={5}/>
                        </div>
                    </div>
                </div>
                <div className="content">
                <Box mt={3}>
                    <Button color='primary'>
                        <Typography noWrap sx={{ width: "300px" }}>{wish}</Typography>
                    </Button>
                </Box>
                </div>
                {/* <div className="content">
                    <div className="content-text">{wish}</div>
                </div> */}
            </div>
        </div>


    )
  }


function Date({date}){
    var date_split = date.split('')
    date_split.splice(4, 1)
    date_split.splice(6, 1)
    return date_split
}