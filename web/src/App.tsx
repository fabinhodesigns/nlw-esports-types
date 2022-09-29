import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

import { useEffect, useState } from 'react';
 
function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games/')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      }
    );
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src ={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        {/* 35:15 */}

        {games.map(game => {
          return (
            <GameBanner
              key={game.id} 
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <CreateAdBanner />

    </div>
  )
} 

export default App