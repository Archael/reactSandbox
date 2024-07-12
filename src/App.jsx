import Toast from './components/Toast';

import { useState } from 'react';

function App() {
  const [enrolled, setEnrolled] = useState(false);
  function handleEnrol() {
    // Todo: Show toast
    setEnrolled(true);

    setTimeout(() => {
      // Todo: hide toast
      setEnrolled(false);
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {enrolled && <Toast message="Enrolled Successfully" />}

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
