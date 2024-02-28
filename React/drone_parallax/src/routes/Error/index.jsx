import './style.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return (
        <div className="container-error">
            <h1 className='title-error'>Código <span>404</span>, Página não encontrada!</h1>

            <Link to='/' className='link-back'>Voltar ao Inicio</Link>
        </div>
    )
}