import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src ={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game1.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game2.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game3.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game4.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game5.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden"href="" >
          <img src="/game6.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div className="">
            <strong className="font-black text-2xl text-white block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <div>
            <button className="py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 rounded flex items-center gap-3">
              <MagnifyingGlassPlus size="24" />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App