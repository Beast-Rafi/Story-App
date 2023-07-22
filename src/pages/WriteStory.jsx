import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default function WriteStory({}) {
  const [storyData, setStoryData] = useState({
    name: "",
    occupation: "",
    class: "",
    section: "",
    storyText: "",
    time: ""
  });
  const checkCpsc = () => {
    if (storyData.occupation === "cpscian") {
      return (
        <>
          <input
            type="text"
            placeholder="Your Class"
            className="border w-4/5  h-9 rounded-lg p-1 bg-light-dark border-col-1"
            name="class"
            onChange={hanldeStoryData}
          />
          <div className="flex flec-col gap-1">
            <label htmlFor="section">Choose your section</label>
            <select className="bg-light-dark" onChange={hanldeStoryData} name="section" id="section">
              <option className="bg-light-dark" value="none">--none--</option>
              <option className="bg-light-dark" value="dahlia">Dahlia</option>
              <option className="bg-light-dark" value="daffo">Daffo</option>
              <option className="bg-light-dark" value="dolon">Dolon</option>
              <option className="bg-light-dark" value="shapla">Shapla</option>
              <option className="bg-light-dark" value="mohua">Mohua</option>
            </select>
          </div>
        </>
      );
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBBXfUx3AHzvBZnfZuGXgSg66vWI1-8oD4",
    authDomain: "story-telling-57716.firebaseapp.com",
    projectId: "story-telling-57716",
    storageBucket: "story-telling-57716.appspot.com",
    messagingSenderId: "50807257590",
    appId: "1:50807257590:web:531946014189dd8543efd7",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  function hanldeStoryData(event) {
    const { name, value, type, checked } = event.target;
    setStoryData((prevStorydata) => {
      return {
        ...prevStorydata,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    const docRef = addDoc(collection(db, "stories"), {
      ...storyData,
      time: dateTime
    });
    console.log("From Submitted");
    alert("Form submitted")
    window.location.reload()
  }
  useEffect(() => surprise(), [storyData.section]);
  function surprise() {
    if (storyData.class === "8" && storyData.section === "daffo") {
      alert("We are in same section, brother!!😮");
      // return "We are in same section, Brother"
    }
  }
  return (
    <>
      <div className="h-screen w-full">
        <div className="mt-14 text-white center p-4 h-10/12 w-10/12 border border-slate-950 rounded-xl bg-[#4568E4] ">
          <h1 className="text-center text-2xl">
            Write your fabilous Story. 😀
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-2 p-3">
            <input
              type="text"
              placeholder="Your name"
              className="border w-4/5  h-9 rounded-lg p-1 bg-light-dark border-col-1"
              onChange={hanldeStoryData}
              name="name"
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="occupation" className="border w-4/5  h-9 rounded-lg p-1 bg-light-dark border-col-1">Choose your Occupation</label>
              <select
                className="flex flec-col rounded-sm bg-slate-900 gap-1 w-4/5"
                onChange={hanldeStoryData}
                name="occupation"
                id="occupation"
              >
                <option className="bg-slate-900" value="none">--none--</option>
                <option className="bg-slate-900" value="student">Student</option>
                <option className="bg-slate-900" value="job">Job</option>
                <option className="bg-slate-900" value="cpscian">CPSCIAN</option>
                <option className="bg-slate-900" value="other">Other</option>
              </select>
            </div>
            {storyData.occupation === "student" && (
              <input
                type="text"
                placeholder="Your Class"
                className="border w-4/5 h-9 rounded-lg bg-light-dark p-1 border-green-400"
                name="class"
                onChange={hanldeStoryData}
              />
            )}
            {checkCpsc()}
            <textarea
              name="storyText"
              className="border bg-light-dark border-emerald-700 p-3 "
              placeholder={`${storyData.name}${
                storyData.name ? ", " : ""
              }Write your story`}
              onChange={hanldeStoryData}
            />
            <button className="justify-items-center h-10 w-20 rounded hover:bg-emerald-950 hover:border-emerald-400 hover:border-2 bg-emerald-700 text-white ">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <CopyRight /> */}
    </>
  );
}
