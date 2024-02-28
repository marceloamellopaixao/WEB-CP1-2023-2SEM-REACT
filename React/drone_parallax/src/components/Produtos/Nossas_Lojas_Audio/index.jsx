import audioMp3 from '../../../assets/audios/GuardioesGalaxia.mp3'

export default function Nossas_Lojas_Audio() {
    return (
        <div className="box ladoA">
            <audio controls>
                <source src={audioMp3}/>
                <p>este seu navegador não suporta está mídia</p>
            </audio>
        </div>
    )
}