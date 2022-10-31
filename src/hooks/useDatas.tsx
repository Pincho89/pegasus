import { useEffect,useState } from 'react'
import dataDB from '../api/dataDB'
import { GetContactosForCombo,GetMateriasForCombo,GetEventosForCombo, GetMateriasPorCurso } from '../interfaces/dataInterface';


export const useDatas = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [contactos, setContactos] = useState<GetContactosForCombo[]>([])

    const [cursos, setcursos] = useState<GetMateriasForCombo[]>([])

    const [eventos, setEventos] = useState<GetEventosForCombo[]>([])



    const getDataContactosInstitucion = async() => {
        dataDB.get('/Contactos/GetContactosForCombo')
                .then( resp=>{
                    setContactos(resp.data)
                    setTimeout(()=>{
                        setIsLoading(false)
                    }, 1000)
                });
    }

    const getDataMaterias = async() => {

        const resp = await dataDB.get<GetMateriasForCombo>('/Materia/GetMateriasForCombo');
        //setcursos(resp.data.nombre);
                
    }
  
    const getDataEventos = async() => {
        dataDB.get('/Evento/GetEventosForCombo')
                .then( resp=>{
                    setEventos(resp.data)
                    setTimeout(()=>{
                        setIsLoading(false)
                    }, 1000)
                });
    }

    useEffect(() => {
        //Lista Contactos
        getDataContactosInstitucion();

        //Lista Cursos
        getDataMaterias();

        //Lista Eventos
        getDataEventos();
    
        }, [])


    return{
        contactos,
        cursos,
        eventos,
        isLoading
    }


}
