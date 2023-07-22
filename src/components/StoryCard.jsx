export default function StoryCard(props) {
  console.log(props);
  return (
    <div key={props.item.id} className="p-8">
      <p>Name: {props.item.name}</p>
      <p>Occupation: {props.item.occupation}</p>
      {props.item.occupation === "student" ? (
        <p>Class: {props.item.class} </p>
      ) : props.item.occupation == "cpscian" ? (
        <>
          <p>Class: {props.item.class} </p>
          <p>Section: {props.item.section} </p>
        </>
      ) : (
        ""
      )}
      <p>props.item.</p>
    </div>
  );
}
