import React from 'react';
import StandingSection from './Standing';

export default async function standingPage() {
  const response = await fetch('http://api.cup2022.ir/api/v1/standings', {
    headers: {
      authorization: process.env.API_KEY ?? '',
    },
    //todo revaluate
    next: {
      revalidate: 10,
    },
  });

  const standings = (await response.json()).data;

  return (
    <div className="sm:grid sm:grid-cols-2 gap-4">
      {standings.map((standing) => (
        <StandingSection standing={standing} key={standing._id} />
      ))}
      <pre>{/*{JSON.stringify(standings, null, 2)}*/}</pre>
    </div>
  );
}
