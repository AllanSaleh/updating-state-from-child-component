import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("allan");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title);
          console.log(body);
          console.log(author);
        }}
      >
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="kishi">Kishi</option>
          <option value="kutay">Kutay</option>
          <option value="allan">Allan</option>
        </select>
        <button type="submit">Add Blog</button>
        {/* {title}
        {body}
        {author} */}
      </form>
    </div>
  );
};

export default Create;
