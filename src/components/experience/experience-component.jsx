import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/experience/experience-component.scss'

const InterFont3 = Inter({
    weight: ["300"],
    subsets: ["latin"]
})

export default function ExperienceComponent(){
    return(

        <div className="experience--container_description">

            <div className="experience--txt_1">

                <div className="experience--sub_containr_txt_1">

                    <h4 className={`${InterFont3.className} experience--sub_txt_1`}>
                        I love creating any idea you imagine on the web.2222
                    </h4>

                    <h4 className={`${InterFont3.className} experience--sub_txt_1`}>
                        Dreams do come true
                    </h4>

                </div>

                

            </div>

            <div className="experience--txt_2">
                
                <p className={`${InterFont3.className} experience--sub_txt_2`}>
                    Since 2022, I have been working as a professional in the area of web development. I collaborated with several local companies, creating web applications of different types. I am very passionate about front-end development, design and user experience, as well as process development and Apis creations on the back-end.
                </p>

            </div>

        </div>

    )
}