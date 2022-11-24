import React from 'react';
import TeamRow from './TeamRow';
import { orderBy } from 'lodash';

export default function StandingSection({ standing }) {
  const { _id, group, teams } = standing;
  return (
    <div className="p-4 shadow bg-gray-50 rounded-lg mt-4">
      <div className="grid grid-cols-7 text-xs">
        <p className="font-bold col-span-2">グループ {group}</p>
        <p className="mx-auto">ゲーム数</p>
        <p className="mx-auto">勝</p>
        <p className="mx-auto">敗</p>
        <p className="mx-auto">引分</p>
        <p className="mx-auto">ポイント数</p>
      </div>
      <hr className="my-2" />
      {/*{teams.map((team) => {
        return <TeamRow team={team} key={team.name_en} />;
      })} */}
      {orderBy(teams, 'pts', 'desc').map((team) => {
        return <TeamRow team={team} key={team.name_en} />;
      })}
    </div>
  );
}
