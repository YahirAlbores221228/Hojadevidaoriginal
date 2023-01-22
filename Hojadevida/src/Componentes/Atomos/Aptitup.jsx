import { data } from "../../Data/data";
import '../../assets/Styles/Actitudes.css'
import diseño from '../../assets/img/diseño.jpg'
function Aptitup() {
    return ( 

<div className="Container-Aptitud">
<ul>
<h1 className="tile">{data.Aptitudes.title}</h1>
<hr className="aqui"/>
<li className="Aptitud1">{data.Aptitudes.Aptitud1}</li>
<li className="Aptitud2">{data.Aptitudes.Aptitud2}</li>
</ul>
<img src={diseño} alt=""  className="foto2"/>
</div>
 );
}

export default Aptitup;