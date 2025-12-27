import "./Main.scss"

export default function Main() {
    return (
        `
        <main>
            <form>
                <textarea placeholder="New Note..." name="newNote" id="new-note" minlength="1" ></textarea>
                <div id="buttons">
                <button type="button" id="save-note">Save</button>
                <button type="reset" id="clear-note">Clear</button>
                </div>
            </form>
            <h2>Saved Notes:</h2>
            <ul id="notes-list"></ul>
        </main>
        `
    )
}