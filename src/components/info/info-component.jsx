import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/information/information.scss'

export default function InfoComponent(){
    return(
        <div>

            <div className="container">

                <div className="row">

                    <div className="col">

                        <div className="info--container_options">

                            <div className='info--c_opt'>

                                <h2 className="info--name_opt">
                                    About
                                </h2>

                            </div>

                            <div className='info--c_opt'>

                                <h2 className="info--name_opt">
                                    Experience
                                </h2>

                            </div>

                            <div className='info--c_opt'>

                                <h2 className="info--name_opt">
                                    Projects
                                </h2>

                            </div>

                            <div className='info--c_opt'>

                                <h2 className="info--name_opt">
                                    Skills
                                </h2>

                            </div>


                        </div>

                    </div>

                    <div className="col">

                        <div className="info--container_info_general">

                            <div className="info--c_name">

                                <h1 className="info--name">
                                    Sergio Andrés Cobos Suarez
                                </h1>

                            </div>

                            <div className="info--c_position">
                                
                                <h4 className="info--position">
                                    Full stack web developer
                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col">

                    </div>

                </div>
                
            </div>

        </div>
    )
}