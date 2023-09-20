import Quadrado from "@/componenteTabuleiro/tabuleiro_quadrado_Comp"
import style from "@/styles/tabuleiro.module.css"

export default function Linha(props){
    return (
        <div className={style.Linha}>
            <Quadrado black={props.black} />
            <Quadrado black={! props.black} />
            <Quadrado black={props.black} />
            <Quadrado black={! props.black} />
            <Quadrado black={props.black} />
            <Quadrado black={! props.black} />
            <Quadrado black={props.black} />
            <Quadrado black={! props.black}/>

        </div>
    )
}