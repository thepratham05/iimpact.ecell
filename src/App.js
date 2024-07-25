import React, { useEffect } from 'react';
import './App.css';
import iimpact from './assets/iimpact.png';

function App() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={iimpact} alt="Event Logo" />
        <div className="content">
          <h2>Learn. Pitch. Launch.</h2>
          <p>
            Join us for an exciting event where you'll have the opportunity to learn from industry experts,
            pitch your innovative ideas, and launch your startup with the support of experienced mentors.
          </p>
          <div className="buttons">
            <a
              href="https://lu.ma/event/evt-yHrAHpuhxY6jSTU"
              className="luma-checkout--button"
              data-luma-action="checkout"
              data-luma-event-id="evt-yHrAHpuhxY6jSTU"
            >
              Register Solo
            </a>
            <a
              href="https://lu.ma/event/evt-yHrAHpuhxY6jSTU"
              className="luma-checkout--button"
              data-luma-action="checkout"
              data-luma-event-id="evt-yHrAHpuhxY6jSTU"
            >
              Register Team
            </a>
          </div>
        </div>
      </header>
      <footer>© Ecell 2024</footer>
    </div>
  );
}

export default App;
