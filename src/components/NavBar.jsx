import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className="text-white flex justify-between p-4 align-middle h-20 bg-col-5">
        <h1 className="text-3xl font-bold" >FSR Stories</h1>
        <ul className="h-full p-2 flex justify-center gap-3">
            <Link className="hover:underline" to="/">Home</Link>        
            <Link className="hover:underline" to="/write-story">Write Story</Link>        
            <Link className="hover:underline" to="/read-story">Read Story</Link>        
        </ul>
      </nav>
    </>
  );
}
