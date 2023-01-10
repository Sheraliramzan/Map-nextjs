import style from '../../styles/Home.module.css'
import Image from 'next/image'
function Header(){
    return(
        <div className={style.head}>
             <Image src="/logo.png" width={200} height={100} />
            <h3>This is an Expo line train route, Where all the stations are stated in the below map. <br/>Feel free to click them</h3>
        </div>
    )
}

export default Header