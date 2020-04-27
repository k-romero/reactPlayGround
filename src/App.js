import React from 'react';

import './App.scss';

import UserCards from './components/github_card/UserCards'

function App() {
  return (
    <div className="App">
    <UserCards title="TheGitHubCardsApp" />
    </div>
  );
}

export default App;
