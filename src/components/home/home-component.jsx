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

            <section className='container w-100 home--screen'>

                <div className="d-flex flex-column h-100">

                    <div className="home--container_img">

                        <img src="/images/serch1.png" alt='Sticker Serch' className='home--img' />

                    </div>

                    <div className="home--container_welcome flex-column">

                        <h1 className={`${InterFont.className} home--text1`}>Hi<img src="/images/wave1.png" alt="hi emoji" className="home--img2" />, I&apos;m Sergio</h1>

                        <h2 className={`${InterFont.className} home--text2`}>Web Full Stack Developer</h2>

                    </div>


                    {/* <div className="col">

                        <div className="home--container_subtittle">

                            

                        </div>

                    </div> */}


                </div>

            </section>


        </div>
    )
}