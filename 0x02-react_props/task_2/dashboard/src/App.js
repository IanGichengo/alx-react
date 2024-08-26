function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Holberton logo" />
          <h1>School dashboard</h1>
        </header>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button type="button">OK</button>
        </div>
        <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    );
  }
  