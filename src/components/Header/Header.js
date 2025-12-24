import "./Header.scss";

export default function Header() {
    return (
        `
        <header>
          <h1>📝Noter</h1>
          <form>
            <textarea placeholder="New Note..." name="newNote" id="newNote" minlength="1" ></textarea>
            <button type="button" id="saveNote">Save</button>
            <button type="reset" id="clearNote">Clear</button>
          </form>
        </header>
        `
    );
}