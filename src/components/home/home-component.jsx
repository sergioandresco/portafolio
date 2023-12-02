"use client";

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/home/home.scss'

const InterFont = Inter({
    weight: ["800"],
    subsets: ["latin"]
})

export default function HomeComponent(){

    const manejarClick = () => {
        event.preventDefault();
        const elemento = document.getElementById('info');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className='home--container_father' id="home">

            <section className='container home--screen'>

                <div className="d-flex flex-column home--container_info">

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

                <div className="home--container_icon_down">

                    <a href="" className='home--animate_hand'>

                        <img src="/images/hand-down.png" alt="hand down" className='home--item_hand_down' onClick={manejarClick}/>
                        
                    </a>

                </div>

            </section>


        </div>
    )
}