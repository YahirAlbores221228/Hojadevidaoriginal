import Header from "../Componentes/Moleculas/header";
import HabiAptitup from "../Componentes/Moleculas/HabiAptitup";
import Software from "../Componentes/Atomos/Software";
import Contacto from "../Componentes/Atomos/Contacto"

import Combinacion from "../Componentes/Moleculas/combinacion";
import Experiencia from "../Componentes/Atomos/Experiecia";
import '../assets/Styles/pages.css'
function CV() {
    return ( 
<div className="flex">
<>
<Header></Header>
<Combinacion></Combinacion>
<HabiAptitup></HabiAptitup>
<Software></Software>
<Experiencia></Experiencia>
<Contacto></Contacto>

</>
</div>
 );
}
export default CV;