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

        <div className="skills--container_description">

            <div className="projects--txt_1">

                <div className="skills--sub_containr_txt_1">

                    <div className="skills--container_skills">

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/postgresql.svg" alt="postgreSQL" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>PostgreSQL</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/javascript.svg" alt="javascript" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>JavaScript</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/css.svg" alt="css" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>CSS</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/react.svg" alt="react" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>React</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/html5.svg" alt="html5" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>HTML5</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/git.svg" alt="git" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Git</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/python.svg" alt="python" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Python</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/nextjs.svg" alt="nextjs" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>NextJS</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/mysql.svg" alt="mysql" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>MySQL</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/cpanel.svg" alt="cpanel" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>CPanel</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/figma.svg" alt="figma" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Figma</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/sass.svg" alt="sass" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Sass</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/ubuntu.svg" alt="ubuntu" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Ubuntu</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/amazon_aws.svg" alt="AWS" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>AWS</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/php.svg" alt="php" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>PHP</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/postman.svg" alt="postman" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Postman</span>

                            </div>

                        </div>

                        <div className="skills--container_father_icon">

                            <div className="skills--container_icon">

                                <img src="/images/icons/bootstrap.svg" alt="bootstrap" className='skills--icon' />

                            </div>

                            <div className="skills--name_icon name">

                                <span>Bootstrap</span>

                            </div>

                        </div>

                    </div>

                    <div className="skills--container_footer_skills">

                        <div className="skills--subcontainer_footer_skills">

                            <div className="skills--footer_txt">

                                <span className={`${InterFont3.className} skills--from`}>from <strong className={`${InterFont2.className}`}>Colombia</strong></span>

                            </div>

                            <a href="https://github.com/sergioandresco">

                                <div className="skills--footer_img">

                                    <img src="/images/icons/github.svg" alt="github" className='skills--icon_footer' />

                                </div>

                            </a>

                            <a href="https://www.linkedin.com/in/sergio-andres-cobos-suarez-942637219/">

                                <div className="skills--footer_img">

                                    <img src="/images/icons/linkedin.svg" alt="linkedin" className='skills--icon_footer' />

                                </div>

                            </a>

                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    )
}