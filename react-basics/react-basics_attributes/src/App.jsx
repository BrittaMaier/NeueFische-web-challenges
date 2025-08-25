import "./styles.css";

export default function App() {
  return <NewArticle />;
}
function NewArticle() {
  return (
    <article>
      <h2 className="article__title">Hi, Folks!</h2>
      <label htmlFor="article__input">ID</label>
      <input
        type="checkbox"
        id="article__input"
        name="article__input"
        placeholder="John Doe"
        required
      />
    </article>
  );
}
