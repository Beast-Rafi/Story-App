import { useState, Fragment } from "react"
import data from "../data"
import NavBar from "./NavBar"
import CopyRight from "./CopyRight"
export default function ShowStory() {
    const [story ,setStory] = useState({
        name: "",
        occupation:"",
        class:"",
        section:"",
        story:"",
    })
    const storiesArr = data.data.stories
    const storyCom = storiesArr.map( item => {
        const renderClass = () => {
            if(item.occupation === "student") {
                return (
                <>
                    <h3><span className="font-mono font-semibold uppercase">Class:</span> {item.class}</h3>
                </>
                )
            }else if (item.occupation === "cpscian") {
                return(
                    <>
                        <h3><span className="font-mono font-semibold uppercase">Class:</span> {item.class}</h3>
                        <h3><span className="font-mono font-semibold uppercase">Section:</span> {item.section}</h3>
                    </>
                )
            }
        }
        return (
            <>
                <div className="p-3 border ">
                    <h1><span className="font-mono font-semibold uppercase">Name:</span> {item.name}</h1>
                    <h1><span className="font-mono font-semibold uppercase">Occupation:</span> {item.occupation}</h1>
                    {renderClass()}
                    <p><span className="font-mono font-semibold uppercase">Story:</span> <br />{item.story}</p>
                </div>
            </>
        )
    })
    return(
        <>
            <NavBar />
            {storyCom}
            <CopyRight />
        </>
    )
}