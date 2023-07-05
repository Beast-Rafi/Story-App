import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import CopyRight from "./CopyRight"

export default function WriteStory({}) {
    const [storyData, setStoryData] = useState({
        name:"",
        occupation:"",
        class:"",
        section:"",
        storyText:""

    })
    const checkCpsc = () => { 
        if(storyData.occupation === "cpscian") {
            return (
                <>
                    <input
                            type="text"
                            placeholder="Your Class"
                            className="border w-4/5 h-9 rounded-lg p-1 border-green-700"
                            name="class"
                            onChange={hanldeStoryData}
                    />
                    <div className="flex flec-col gap-1">
                        <label htmlFor="section">Choose your section</label>
                        <select onChange={hanldeStoryData} name="section" id="section">
                            <option value="none">--none--</option>
                            <option value="dahlia">Dahlia</option>
                            <option value="daffo">Daffo</option>
                            <option value="dolon">Dolon</option>
                            <option value="shapla">Shapla</option>
                            <option value="mohua">Mohua</option>
                        </select>
                    </div>
                </>
            )
        }
    }
    function hanldeStoryData(event) {
        const { name , value , type , checked } = event.target
        setStoryData(prevStorydata => {
            return {
                ...prevStorydata,
                [name]: value 
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        return <p className="text-green-700">Submitted successfully</p>
    }
    function surprise() {
        if(storyData.class === "8" && storyData.section === "daffo") {
            alert("We are in same section, brother!!😮")
            // return "We are in same section, Brother"
        }
    }  
    surprise()
    return(
        <>
        <NavBar />
        <div className=" h-screen w-full">
                <div className="mt-14 center h-5/6 w-10/12 border-4 rounded-xl border-green-600 ">
                    <h1 className="text-center text-2xl">Write your fabilous Story. 😀</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2" >
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border w-4/5  h-9 rounded-lg p-1 border-green-700"
                            onChange={hanldeStoryData}
                            name="name"
                        />
                        <div>
                        <label  htmlFor="occupation">Choose your Occupation</label>
                            <select className="flex flec-col gap-1" onChange={hanldeStoryData} name="occupation" id="occupation">
                                <option value="none">--none--</option>
                                <option value="student">Student</option>
                                <option value="job">Job</option>
                                <option value="cpscian">CPSCIAN</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {storyData.occupation === "student" && 
                        <input
                            type="text"
                            placeholder="Your Class"
                            className="border w-4/5 h-9 rounded-lg p-1 border-green-700"
                            name="class"
                            onChange={hanldeStoryData}
                        />}
                        {checkCpsc()}
                        <textarea
                            name="storyText"
                            className="border border-emerald-700 p-2 "
                            placeholder={`${storyData.name}${storyData.name ? ", " : ""}Write your story`}
                            onChange={hanldeStoryData}
                        />
                        <button className="justify-items-center h-10 w-20 rounded hover:bg-emerald-950 hover:border-emerald-400 hover:border-2 bg-emerald-700 text-white ">Submit</button>

                    </form>
                </div>
        </div>
        <CopyRight />
        </>
    )
}