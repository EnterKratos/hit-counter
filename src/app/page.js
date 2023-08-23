import React from 'react';

import {
  logSiteVisit,
} from '../helpers/file-helpers';

function Home() {
  const visitCount = logSiteVisit();
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {visitCount}.</p>
    </main>
  );
}

export default Home;
