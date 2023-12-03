import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/experience/experience-component.scss'

const InterFont1 = Inter({
    weight: ["400"],
    subsets: ["latin"]
})

const InterFont2 = Inter({
    weight: ["600"],
    subsets: ["latin"]
})

const InterFont3 = Inter({
    weight: ["300"],
    subsets: ["latin"]
})

export default function ExperienceComponent(){
    return(

        <div className="experience--container_description">

            <div className="experience--txt_1">

                <div className="experience--sub_containr_txt_1">

                    <div className="experience--container_experience_list">

                        <div className='experience--container_experiente_date'>

                            <h2 className={`${InterFont3.className} experience--opt_1`}>
                                February - Present
                            </h2>

                        </div>

                        <div className="experience--container_experience_description">

                            <h2 className={`${InterFont2.className} experience--sub_txt_1`}>
                                T&T Interactiva
                            </h2>

                            <h3 className={`${InterFont1.className} experience--sub_txt_2`}>
                                Full stack developer
                            </h3>

                            <p className={`${InterFont3.className} experience--sub_txt_3`}>
                                Web development, server and service administration, database design and modeling, technical support.
                            </p>

                        </div>

                        

                    </div>

                    <div className="experience--container_experience_list">

                        <div className='experience--container_experiente_date'>

                            <h2 className={`${InterFont3.className} experience--opt_1`}>
                                August - December 2022
                            </h2>

                        </div>

                        <div className="experience--container_experience_description">

                            <h2 className={`${InterFont2.className} experience--sub_txt_1`}>
                                eDx Tecnología en salud
                            </h2>

                            <h3 className={`${InterFont1.className} experience--sub_txt_2`}>
                                Analista TI
                            </h3>

                            <p className={`${InterFont3.className} experience--sub_txt_3`}>
                                Server and service administration, technical support.
                            </p>

                        </div>

                        

                    </div>

                    <div className="experience--container_experience_list">

                        <div className='experience--container_experiente_date'>

                            <h2 className={`${InterFont3.className} experience--opt_1`}>
                                February - August 2022
                            </h2>

                        </div>

                        <div className="experience--container_experience_description">

                            <h2 className={`${InterFont2.className} experience--sub_txt_1`}>
                                AVVILLAS Bank
                            </h2>

                            <h3 className={`${InterFont1.className} experience--sub_txt_2`}>
                                Analytical vice presidency and financial risks, information security
                            </h3>

                            <p className={`${InterFont3.className} experience--sub_txt_3`}>
                                Support in the review of information assets, support in the study and review of vulnerabilities, support in the information leak process, monitoring of information security policies.
                            </p>

                        </div>

                        

                    </div>

                    


                </div>

                

            </div>

        </div>

    )
}