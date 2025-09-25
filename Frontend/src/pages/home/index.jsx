import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {

    return (
        <div className='container-site'>

            <section className='section-tags' >

                <div className='container-tags'>

                    <div className='foto-tags'>
                        <img src="/assets/images/image 1.svg" alt="logo1" />
                        <h1>Doe Vida</h1>
                    </div>

                    <Link to='/login'> Inicio </Link>
                    <Link to='/login'> Inicio </Link>
                    <Link to='/login'> Inicio </Link>
                    <Link to='/login'> Inicio </Link>
                    <Link to='/login'> Inicio </Link>
                    
                   <Link to='/login'> <button> torne-se um doador </button> </Link>

                </div>
            </section>
        </div>
    )
}