import React from 'react'
import anh1 from "../../assets/anh1.jpg"
import anh2 from "../../assets/anh2.jpg"
import anh3 from "../../assets/anh3.jpg"
import anh4 from "../../assets/anh4.jpg"
import anh5 from "../../assets/anh5.jpg"
import anh6 from "../../assets/anh6.jpg"
import ItemApp from '../../component/ItemApp/itemApp'
import { useSelector } from 'react-redux'

const AppName = () => {
    const { statusItemMenu } = useSelector(state => state.appMcs)
    return (<div className={statusItemMenu ? "container ml-0" : "container ml-40"} >
        <div className="app">
            <ItemApp img={anh1} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
            <ItemApp img={anh2} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
        </div>
        <div className="app">
            <ItemApp img={anh3} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
            <ItemApp img={anh4} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
        </div>
        <div className="app">
            <ItemApp img={anh5} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
            <ItemApp img={anh6} name={"App name"} content={"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Mauris nisi lectus ,ullamcorper ac..."} button1={"Popular in your org "} button2={"Best selling "} />
        </div>
    </div>)
}

export default AppName