import grootIcon from '../../../assets/groot.png'
import grootDance from '../../../assets/videos/BabyGrootDancando.mp4'


export default function Nossas_Lojas_Video(){
    return (
        <div className="box ladoB">
            <video controls poster={grootIcon}>
                <source src={grootDance} />
                <source src="arq/video/BabyGrootDançando.mpg" />
                <source src="arq/video/BabyGrootDançando.avi" />
                <p>este seu navegador não suporta está mídia</p>
            </video>
        </div>
    )
}