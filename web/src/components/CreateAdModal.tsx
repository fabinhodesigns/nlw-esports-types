import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';
import { Input } from './Form/Input';

export function CreateAdModal() {
    return (
    <Dialog.Portal>
        <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">

            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input id="game" placeholder="Selecione o game que deseja jogar" />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="yearPlaying">Joga a quantos anos?</label>
                    <Input id="yearPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input id="discord" type="text" placeholder="Usuário000" />
                </div>
                </div>

                <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                    <label id="weekDays">Quando você costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                    <button
                        title="Domingo"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        D</button>
                    <button
                        title="Segunda"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        S</button>
                    <button
                        title="Terça"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        T</button>
                    <button
                        title="Quarta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        Q</button>
                    <button
                        title="Quinta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        Q</button>
                    <button
                        title="Sexta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        S</button>
                    <button
                        title="Sábado"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        S</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>

                    <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                </div>
                </div>

                <div className="mt-2 flex gap-2 text-small text-white">
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold gap-4 hover:bg-zinc-600" type="button">Cancelar</Dialog.Close>
                <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600" type="submit">
                    <GameController size={24} />
                    Encontrar duo
                </button>
                </footer>

            </form>
        </Dialog.Content>
        </Dialog.DialogOverlay>
    </Dialog.Portal>
    );
}