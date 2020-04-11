import React from 'react';

export default function App() {
  
  const [ draft, setDraft ] = React.useState("");

  return (
      <div>
        <input 
          type="text" 
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <br />
        <button 
            onClick={() => alert(draft)}>
          Show input value
        </button>
      </div>
  );
}
