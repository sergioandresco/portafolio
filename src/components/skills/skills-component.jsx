import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/skills/skills-component.scss'

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

export default function SkillsComponent(){
    return(

        <div className="projects--container_description">

            <div className="projects--txt_1">

                <div className="projects--sub_containr_txt_1">

                    <div className="skills--container_skills">

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/postgresql.svg" alt="postgreSQL" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon">

                                <span>PostgreSQL</span>

                            </div>

                        </div>

                        

                        <div className="skills--container_icon">

                            <img src="/images/icons/javascript.svg" alt="javascript" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/css.svg" alt="css" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/react.svg" alt="react" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/html5.svg" alt="html5" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/git.svg" alt="git" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/python.svg" alt="python" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/nextjs.svg" alt="nextjs" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/mysql.svg" alt="mysql" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/cpanel.svg" alt="cpanel" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/figma.svg" alt="figma" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/sass.svg" alt="sass" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/ubuntu.svg" alt="ubuntu" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/amazon_aws.svg" alt="AWS" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/php.svg" alt="php" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/postman.svg" alt="postman" className='skills--icon' />

                        </div>

                        <div className="skills--container_icon">

                            <img src="/images/icons/bootstrap.svg" alt="bootstrap" className='skills--icon' />

                        </div>


                    </div>

                    <div className="skills--container_footer_skills">

                    </div>
                    
                </div>

            </div>

        </div>

    )
}