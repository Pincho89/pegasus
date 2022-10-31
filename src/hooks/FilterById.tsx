import { useState, useEffect } from 'react';
import dataDB from '../api/dataDB';
import {GetAsistenciaByID } from '../interfaces/dataInterface';

export const FilterById = (UserID: any) => {

    const [asistencia, setAsistencia] = useState<GetAsistenciaByID[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getAsistenciaPorId = async() => {
        dataDB.get(`/Asistencia/GetById?id=${UserID}`)
                .then( resp=>{
                    setAsistencia(resp.data[0].presente)
                    setTimeout(()=>{
                        setIsLoading(false)
                    }, 1000)
                });
    }


    useEffect(() => {

    //Materias por Curso
    getAsistenciaPorId();

    }, [])
    
    return{
        asistencia,
        isLoading
    }

}
