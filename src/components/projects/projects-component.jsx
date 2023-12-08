import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/projects/projects-component.scss'
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

export default function ProjectsComponent(){
    return(

        <div className="projects--container_description">

            <div className="projects--txt_1">

                <div className="projects--sub_containr_txt_1">

                    <a href="" className='projects--links_targets'>
                        <div className="projects--container_experience_list">

                            <div className='projects--container_experiente_date'>

                                <img src="/images/Home.png" alt="GitHub" className='projects--project_picture' />

                            </div>

                            <div className="projects--container_experience_description">

                                <h2 className={`${InterFont2.className} projects--sub_txt_1`}>
                                    Portfolio
                                </h2>

                                <h3 className={`${InterFont1.className} projects--sub_txt_2`}>
                                    In production
                                </h3>

                                <p className={`${InterFont3.className} projects--sub_txt_2`}>
                                Portfolio made in next js 13 and displayed in vercel.
                                </p>

                                <div className="projects--container_github">
                                    <a href="" className='projects--container_link_git'>
                                        <img src="/images/icons/github.svg" alt="GitHub" className='projects--githubicon' />
                                        <span className={`${InterFont2.className} projects--label_link`}>GitHub</span>
                                    </a>
                                </div>

                            </div>



                        </div>
                    </a>

                    <a href="http://localhost:3000/" className='projects--links_targets'>
                        <div className="projects--container_experience_list">

                            <div className='projects--container_experiente_date'>

                                <img src="/images/apiDJANGO.png" alt="GitHub" className='projects--project_picture2' />

                            </div>

                            <div className="projects--container_experience_description">

                                <h2 className={`${InterFont2.className} projects--sub_txt_1`}>
                                    Rest Api Creation User
                                </h2>

                                <h3 className={`${InterFont1.className} projects--sub_txt_2`}>
                                    In production
                                </h3>

                                <p className={`${InterFont3.className} projects--sub_txt_2`}>
                                    Project created for any type of user that requires an API created in Django Rest for the creation of users and database storage.
                                </p>

                                <div className="projects--container_github">
                                    <a href="https://github.com/sergioandresco/apiRegisterLogin" className='projects--container_link_git'>
                                        <img src="/images/icons/github.svg" alt="GitHub" className='projects--githubicon' />
                                        <span className={`${InterFont2.className} projects--label_link`}>GitHub</span>
                                    </a>
                                </div>

                            </div>



                        </div>
                    </a>

                    <a href="https://sergioandresco.github.io/Humedal/" className='projects--links_targets'>
                        <div className="projects--container_experience_list">

                            <div className='projects--container_experiente_date'>

                                <img src="/images/humedal.png" alt="GitHub" className='projects--project_picture' />

                            </div>

                            <div className="projects--container_experience_description">

                                <h2 className={`${InterFont2.className} projects--sub_txt_1`}>
                                    Wetland Website
                                </h2>

                                <h3 className={`${InterFont1.className} projects--sub_txt_2`}>
                                    In production
                                </h3>

                                <p className={`${InterFont3.className} projects--sub_txt_2`}>
                                    This website was developed to show and inform the current situation of a very important wetland in Bogota - Colombia.
                                </p>

                                <div className="projects--container_github">
                                    <a href="https://github.com/sergioandresco/Humedal" className='projects--container_link_git'>
                                        <img src="/images/icons/github.svg" alt="GitHub" className='projects--githubicon' />
                                        <span className={`${InterFont2.className} projects--label_link`}>GitHub</span>
                                    </a>
                                </div>

                            </div>



                        </div>
                    </a>
                    
                </div>

            </div>

        </div>

    )
}