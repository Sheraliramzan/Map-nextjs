import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import L from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet'
import { polyline } from 'leaflet'
import { Icon } from 'leaflet'


export default function Map(){

    const position = [49.2856, -123.1124]
    const position2 = [49.286,-123.1190]
    const position3 = [49.28354897426132, -123.11627318025829]
    const position4 = [49.280015902331726, -123.11013957800328]
    const position5 = [49.273199329249536, -123.10034662337053]
    const position6 = [49.26263698245332, -123.06923650213271]
    const position7 = [49.24827117573402, -123.05591730213317]
    const position8 = [49.24428698349363, -123.04611000213336]
    const position9 = [49.23839,-123.032]
    const position10 = [49.22975509375793, -123.01265956386248]
    const position11 = [49.22577173183315, -123.00389418864215]
    const position12 = [49.22007407932802, -122.98845204446222]
    const position13 = [49.21230436193289, -122.95938107885497]
    const position14 = [49.199921506175365, -122.9492463500193]
    const position15 = [49.201591546243876, -122.91263054275736]
    const position16 = [49.20481776956735, -122.90612000213493]
    const position17 = [49.20447075782723, -122.87402738123443]
    const position18 = [49.198959368736126, -122.85071751747914]
    const position19 = [49.189575764593684, -122.8479594471062]
    const position20 = [49.182783766441965, -122.84478657329971]
    const position21 = [49.224692072387384, -122.88940687329809]
    const position22 = [49.23324156214605, -122.8828517732978]
    const position23 = [49.24862585760891, -122.89720949419763]
    const position24 = [49.25352421363046, -122.91873571694994]
    
    const polyline = [
        [49.2856, -123.1124],
        [49.286,-123.1190],
        [49.28354897426132, -123.11627318025829],
        [49.280015902331726, -123.11013957800328],
        [49.273199329249536, -123.10034662337053],
        [49.26263698245332, -123.06923650213271],
        [49.24827117573402, -123.05591730213317],
        [49.24428698349363, -123.04611000213336],
        [49.23839,-123.032],
        [49.22975509375793, -123.01265956386248],
        [49.22577173183315, -123.00389418864215],
        [49.22007407932802, -122.98845204446222],
        [49.21230436193289, -122.95938107885497],
        [49.199921506175365, -122.9492463500193],
        [49.201591546243876, -122.91263054275736],
        [49.20481776956735, -122.90612000213493],
        [49.20447075782723, -122.87402738123443],
        [49.198959368736126, -122.85071751747914],
        [49.189575764593684, -122.8479594471062],
        [49.182783766441965, -122.84478657329971]
        

    ]
    const polyline2 = [
        [49.20481776956735, -122.90612000213493],
        [49.224692072387384, -122.88940687329809],
        [49.23324156214605, -122.8828517732978],
        [49.24862585760891, -122.89720949419763],
        [49.25352421363046, -122.91873571694994]

    ]

    const blueOption = {color: '#00008B'}

    const myIcon = new Icon({
        iconUrl: 'bus.svg',
        iconSize: [32,32]
       })
   
    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={myIcon} position={position}>
                <Popup>
                    Waterfront <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position2}>
                <Popup>
                    Burrard <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position3}>
                <Popup>
                    Grandville <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position4}>
                <Popup>
                    Stadium-Chinatown <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position5}>
                <Popup>
                Main Street-Science World <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position6}>
                <Popup>
                Commercial-Broadway  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position7}>
                <Popup>
                Nanaimo  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position8}>
                <Popup>
                29th Ave <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position9}>
                <Popup>
                Joyce-Collingwood <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position10}>
                <Popup>
                Patterson <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position11}>
                <Popup>
                Metrotown <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position12}>
                <Popup>
                Royal Oak <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position13}>
                <Popup>
                Edmonds <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position14}>
                <Popup>
                22nd Street <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position15}>
                <Popup>
                New Westminster  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position16}>
                <Popup>
                Columbia  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position17}>
                <Popup>
                Scott Road  <br/> Skytrain Station
                </Popup>
            </Marker>
            
            <Marker icon={myIcon} position={position18}>
                <Popup>
                Gateway  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position19}>
                <Popup>
                Surrey Central <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position20}>
                <Popup>
                King George  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position21}>
                <Popup>
                Sapperton  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position22}>
                <Popup>
                Braid <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position23}>
                <Popup>
                Lougheed Town Centre  <br/> Skytrain Station
                </Popup>
            </Marker>

            <Marker icon={myIcon} position={position24}>
                <Popup>
                Production Way-University <br/> Skytrain Station
                </Popup>
            </Marker>

            <Polyline pathOptions={blueOption} positions={polyline}/>
            <Polyline pathOptions={blueOption} positions={polyline2}/>
        </MapContainer>
    )
}