import Image from "next/image";
import style from '../../styles/Home.module.css'
function BImage(){
    return(
        <div className={style.contain}  >
            <Image src="/Train.jpeg" width={1500} height={800} />
        </div>
    )
}

export default BImage