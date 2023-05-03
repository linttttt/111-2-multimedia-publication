import * as React from 'react';
import {Main} from "../components/Layout2";
import { NavbarCustom, NavbarItem } from "../components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../components/Card';
import { IconButton } from '@mui/material';
import { Postcard } from '../components/PostCard';


export default function App() {
    const user = {
        name: "王小明",
        grade: "大一",
        imgSrc: "https://cms-carrier.ntpu.edu.tw/uploads/8d03554e2e3a4f8dacbcad536cf70bfc.jpg",
        wish: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!"
    }
    const user2 = {
        name: "Henry",
        grade: "Senior",
        imgSrc: "https://cc.ntpu.edu.tw/images/2018/12/04/image.jpg",
        wish: "Happy graduation. I bless you with all that you need to earn many more achievements and facts in life ahead. Congratulations and well done. We're so happy that you've achieved this great milestone- Wishing you great success with your dreams and career. It's official: you're now too cool for school"
    
    }

    var users1 = {
        recipient:"收信者", 
        date:"2023.04.11", 
        grade:"二", 
        major:"經濟", 
        // imgSrc:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwALqK5vh4QccpWo4Wr6E9wOTE8LYXjMni1etPZS5F4JMHy3vl",
        imgSrc:"https://img.tukuppt.com/bg_grid/00/16/82/wDXkyGJdLb.jpg!/fh/350",
        wish:"New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!"
    }


    return (
        <div className="App">
            <Main>
                 {/* <Card user={user2}/>  */}
                <Postcard users={users1}/>
            </Main>
            <NavbarCustom>
                <IconButton>
                    <PreviousIcon />
                </IconButton>
                <NavbarItem>
                    <PlayIcon />
                </NavbarItem>
                <NavbarItem>
                    <NextIcon />
                </NavbarItem>
            </NavbarCustom>
        </div>
    )
}