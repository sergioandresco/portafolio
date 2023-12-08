import HomeComponent from '../components/home/home-component'
import InfoComponent from '../components/info/info-component'
import '../assets/styles/principal-page/principal.scss'

export default function Home(){
    return(
        <div className='principal--screen'>
            <HomeComponent />
            <InfoComponent />
        </div>
    )
}