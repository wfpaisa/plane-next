import {
  MemoryRouter,
  // BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
        <br />
        <Link to="/hola">Hola</Link>
        <a href="/hola">Hola</a>
      </div>
    </div>
  );
};

const Hola = () => {
  const xx = 'hola';
  // eslint-disable-next-line no-console
  console.log('2222->', xx);
  // throw new Error('pailas')
  return (
    <>
      <h1>Hola</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default function App() {
  if (window.location.pathname.includes('index.html')) {
    window.location.pathname = '/';
  }

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/hola" element={<Hola />} />
      </Routes>
    </MemoryRouter>
  );
}
