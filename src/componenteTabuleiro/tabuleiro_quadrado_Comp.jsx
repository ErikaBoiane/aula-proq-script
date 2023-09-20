import style from '@/styles/tabuleiro.module.css'

export default function Quadrado(props){
    return (
        <div className={style.Quadrado} style={{backgroundColor: props.black ? "black" : "white"}} >

        </div>
    )

}