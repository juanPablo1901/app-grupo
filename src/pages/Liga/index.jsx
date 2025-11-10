import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { HiOutlinePencil, HiTrash } from "react-icons/hi2";
import { BsTrophyFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";


import './style.css';

function Liga () {
     return(
   <>
   <div className='Gestion-Ligas'> 
      <div className='Gestion'>

         <div className='Ligas-sup'>
            <div className='Ligas'> 
               <h1>Ligas</h1>
               <h4 className='sup'>Controla ligas y torneos</h4>
            </div>

            <div className='Boton-Nuevo'>
               <button> + Crear Nuevo</button>
            </div>  
         </div>

        <div className='Gestion-liga'>
            <h1>Gestión de Ligas</h1>
            <h4 className='sub'>Administra todos las ligas y torneos </h4>

            <div className='Boton-Liga'>
               <button> + Nueva Liga</button>
            </div>   
        </div>

        <div className='busqueda'>
         <input
            type='text'
            placeholder='Buscar ligas..'
         />
        </div>

            <div className='Cartas-U'>
               <div className='Avatar'> <BsTrophyFill /> </div>
                  <div className='Datos'>
                        <h3>Liga Premier 2025</h3>
                        <p> <CiCalendar /> 2025-01-15  <FaLongArrowAltRight />  2025-04-30</p>
                        <div className='equipos'>
                           <h1 className='equipos-cantidad'>32 equipos</h1>
                           <p>$1000,000</p>
                        </div>
                        
                     <div className='Actividad'>
                        <h4 className='torneo'>Torneo</h4>
                        <h4 className='incripcion'>Inscripción</h4>
                     </div>
                     <div className='Botones-Cartas'> 
                        <button className='editar'><HiOutlinePencil /> Editar </button>
                        <button className='basura'><HiTrash /></button>
                     </div>
                  </div>
            </div>

      </div> 
   </div>
   </>
   )
}

export default Liga;