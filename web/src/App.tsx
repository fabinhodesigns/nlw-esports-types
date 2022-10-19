import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}
 
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

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">

               <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
                <form className="mt-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="game" className="font-semibold">Qual o game?</label>
                    <input
                      id="game"
                      type="text"
                      placeholder="Selecione o game que você deseja jogar"
                      className="bg-zinc-900 py-3 px-4 rounded text-small placeholder:text-zinc-500"
                      ></input>
                  </div>

                  <div>
                    <label htmlFor="name">Seu nome (ou nickname)</label>
                    <input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearPlaying">Joga a quantos anos?</label>
                      <input id="yearPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                    </div>
                    <div>
                      <label htmlFor="discord">Qual o seu Discord?</label>
                      <input id="discord" type="text" placeholder="Usuário000" />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label id="weekDays">Quando você costuma jogar?</label>
                      {/* <input id="weekDays" type="text" placeholder="" /> */}
                    </div>
                    <div>
                      <label htmlFor="hourStart">Qual horário do dia?</label>

                      <div>
                        <input id="hourStart" type="time" placeholder="De" />
                        <input id="hourEnd" type="time" placeholder="Até" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input type="checkbox" />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer>
                    <button>Cancelar</button>
                    <button type="submit">
                      <GameController />
                      Encontrar duo
                    </button>

                  </footer>

                </form>
            </Dialog.Content>
          </Dialog.DialogOverlay>
        </Dialog.Portal>

      </Dialog.Root>

    </div>
  )
} 

export default App