import { MagnifyingGlassPlus } from "phosphor-react" 

export function CreateAdBanner() {
    return (
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
    )
}