import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, getDoc } from "firebase/firestore";
import StoryCard from "../components/StoryCard";
export default function ReadStory() {
  const [storyData, setStoryData] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBBXfUx3AHzvBZnfZuGXgSg66vWI1-8oD4",
    authDomain: "story-telling-57716.firebaseapp.com",
    projectId: "story-telling-57716",
    storageBucket: "story-telling-57716.appspot.com",
    messagingSenderId: "50807257590",
    appId: "1:50807257590:web:531946014189dd8543efd7",
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "stories");

  function getStoryData() {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setStoryData(data)
      });
    });
  }
  useEffect(() => getStoryData(), []);

  const setStories = storyData.map((item) => {
    return <StoryCard item={item} key={item.id} />;
  });
  console.log(storyData);
  return (
    <>
      <div className="h-[238px] story-bg bg-cover bg-no-repeat bg-center relative text-center text-white text-xl">
        <p className="h-auto center">
          Read people's life Story
          <br />
          Learn from them
          <br />
          OR
          <br />
          Write your own
        </p>
      </div>
        {setStories}
    </>
  );
}
