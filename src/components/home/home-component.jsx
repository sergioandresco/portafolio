import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/home/home.scss'

const InterFont = Inter({
    weight: ["800"],
    subsets: ["latin"]
})

export default function HomeComponent(){
    return(
        <div>

            <section className='container w-100 h-100 home--screen'>

                <div className="row">

                    <div className="col">

                        <div className="home--container_img">

                            <img src="/images/serch1.png" alt='Sticker Serch' className='home--img' />

                        </div>

                    </div>

                    <div className="col">

                        <div className="home--container_welcome">

                            <h2 className={`${InterFont.className} home--text1`}>Hi<img src="/images/wave1.png" alt="hi emoji" className="home--img2" />, I'm Sergio</h2>

                        </div>

                    </div>

                    <div className="col">

                        <div className="home--container_subtittle">

                            <h2 className={`${InterFont.className} home--text2`}>Web Full Stack Developer</h2>

                        </div>

                    </div>


                </div>

            </section>


        </div>
    )
}