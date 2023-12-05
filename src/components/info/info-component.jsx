"use client";

import { Inter } from 'next/font/google'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/information/information.scss'

//Components for rendering for the menu options
import AboutComponent from '../about/about-component';
import ExperienceComponent from '../experience/experience-component';
import ProjectsComponent from '../projects/projects-component';
import SkillsComponent from '../skills/skills-component';


const InterFont = Inter({
    weight: ["800"],
    subsets: ["latin"]
})

const InterFont2 = Inter({
    weight: ["500"],
    subsets: ["latin"]
})

const InterFont3 = Inter({
    weight: ["300"],
    subsets: ["latin"]
})

export default function InfoComponent(){

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');

    let contenido;
    switch (opcionSeleccionada) {
        case 'opcion1':
        contenido = <AboutComponent />;
        break;

        case 'opcion2':
        contenido = <ExperienceComponent />;
        break;

        case 'opcion3':
        contenido = <ProjectsComponent />;
        break;

        case 'opcion4':
        contenido = <SkillsComponent />;
        break;
        
        default:
        contenido = <AboutComponent />;
    }


    return(
        <div id="info">

            <div className="container info--container_father">

                <div className="row d-flex flex-column">

                    <div className="col info--col_1">

                        <div className="info--container_options">

                            <div className='info--c_opt'>

                                <button className={`${InterFont2.className} info--name_opt ${opcionSeleccionada === 'opcion1' ? 'info--subrayado' : ''}`} onClick={() => setOpcionSeleccionada('opcion1')}>About</button>

                                {/* <h2 className={`${InterFont2.className} info--name_opt`}>
                                    About
                                </h2> */}

                            </div>

                            <div className='info--c_opt'>

                                <button className={`${InterFont2.className} info--name_opt ${opcionSeleccionada === 'opcion2' ? 'info--subrayado' : ''}`} onClick={() => setOpcionSeleccionada('opcion2')}>Experience</button>

                            </div>

                            <div className='info--c_opt'>

                                <button className={`${InterFont2.className} info--name_opt ${opcionSeleccionada === 'opcion3' ? 'info--subrayado' : ''}`} onClick={() => setOpcionSeleccionada('opcion3')}>Projects</button>

                            </div>

                            <div className='info--c_opt'>

                                <button className={`${InterFont2.className} info--name_opt ${opcionSeleccionada === 'opcion4' ? 'info--subrayado' : ''}`} onClick={() => setOpcionSeleccionada('opcion4')}>Skills</button>

                            </div>


                        </div>

                    </div>

                    <div className="col info--col_2">

                        <div className="info--container_info_general">

                            <div className="info--c_name">

                                <h1 className={`${InterFont.className} info--name`}>
                                    Sergio Andrés Cobos Suarez
                                </h1>

                            </div>

                            <div className="info--c_position">
                                
                                <h4 className={`${InterFont3.className} info--position`}>
                                    Full stack web developer
                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col">

                        {contenido}

                    </div>

                </div>
                
            </div>

        </div>
    )
}