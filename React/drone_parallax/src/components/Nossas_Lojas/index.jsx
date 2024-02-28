import './style.css'
import Nossas_Lojas_Audio from '../Produtos/Nossas_Lojas_Audio'
import Nossas_Lojas_Video from '../Produtos/Nossas_Lojas_Video'

export default function Nossas_Lojas(){
    return (
        <section className="img-site">
            <div className="container">
                <h1 className="text-center">
                    Nossas Lojas
                </h1>
                <p className="text-center lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officiis placeat natus consequatur reiciendis
                    soluta nihil itaque corporis repudiandae laudantium dolore. Minima provident cum pariatur, consectetur
                    facere quae aspernatur nobis porro?
                </p>

                <div className="media">
                    <Nossas_Lojas_Audio/>
                    <Nossas_Lojas_Video/>
                </div>
            </div>
        </section>
    )
}