import "./Tag.css";

export default function Tag({ tag }) {
  //const isAdmin = tag.includes("admin");
  return checkAdmin(tag);
  //return <li className="tag">{tag}</li>;
}

function checkAdmin(tag) {
  if (!tag.includes("admin")) {
    return <li className="tag tag--highlight">{tag}</li>;
  }
  return <li className="tag">{tag}</li>;
}
