import Linha from "@/componenteTabuleiro/linha_Comp"
import style from "@/styles/tabuleiro.module.css"

export default function Tabuleiro(){
   return (
    <>
    <div className={style.Tabuleiro}>
    <h1 className={style.Titulo}>Jogo de Damas</h1>
        <Linha />
        <Linha black />
        <Linha />
        <Linha black />
        <Linha />
        <Linha black />
        <Linha />
        <Linha black />
    </div>
    </>
    
   )
}