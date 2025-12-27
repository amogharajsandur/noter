import "./Header.scss";

let currentDate = Date().toString();

export default function Header() {
    return (
        `
        <header>
          <nav>
            <h1>📝Noter</h1>
            <p>Last Updated: ${currentDate}</p>
          </nav>
        </header>
        `
    );
}