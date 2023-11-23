import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/home/home.scss'

const InterFont = Inter({
    weight: ["800"],
    subsets: ["latin"]
})

export default function Home(){
    return(
        <div>

            <section className='container home--screen'>

            </section>


        </div>
    )
}