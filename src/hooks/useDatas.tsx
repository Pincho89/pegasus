import { useEffect,useState } from "react"
import dataDB from "../api/dataDB"
import { GetContactosForCombo } from '../interfaces/dataInterface';


export const useDatas = () => {

    const [contactos, setcontactos] = useState([])


    const getDataContactos = async() => {

        const resp = await dataDB.get<GetContactosForCombo>('/Contactos/GetContactosForCombo');
        //setcontactos(resp.data.id);
                
    }
  
    useEffect(() => {
        //Lista Contactos
        getDataContactos();
    
        }, [])


    return{
        contactos
    }


}
