import style from '../../styles/Home.module.css'
import Image from 'next/image'
function Footer(){
    return(
        <div className={style.foot}>
            <h3>Welcome to this webpage</h3>
            <p>TransLink, formally the South Coast British Columbia Transportation Authority, <br/>
                is the statutory authority responsible for the regional transportation network of <br/>
                Metro Vancouver in British Columbia, Canada, including public transport, major roads and bridges. <br/>
                Its main operating facilities are located in the city of  New Westminster.TransLink was created in 1998 <br/>
                as the Greater Vancouver Transportation Authority and was fully implemented in April 1999 by <br/>
                the Government of British Columbia to replace BC Transit in the Greater Vancouver Regional District and <br/>
                assume many transportation responsibilities previously held  by the provincial government. <br/>
                TransLink is responsible for various modes of transportation in the Metro Vancouver region as <br/>
                well as the West Coast Express, which extends into the Fraser Valley Regional District. On November 29, 2007, <br/>
                 the province of British Columbia approved legislation changing the governance structure and official name of the organization.</p>
           
        </div>
    )
}

export default Footer