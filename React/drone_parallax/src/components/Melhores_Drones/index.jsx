import './style.css'
import Prod_Inspire from "../Produtos/Inspire";
import Prod_Mavic from "../Produtos/Mavic";
import Prod_Phantom from "../Produtos/Phantom";

export default function Melhores_Drones() {
    return (
        <section className="conteudo-site">
            <div className="container">
                <h1 className="text-center">Melhores Drones</h1>
                <p className="text-center lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error accusantium laborum, hic nisi
                    soluta quasi veritatis quod quam, architecto voluptatibus quibusdam quisquam consequuntur eum doloribus
                    impedit aperiam nobis libero!
                </p>

                <Prod_Phantom/>
                <Prod_Mavic/>
                <Prod_Inspire/>
            </div>
        </section>
    )
}