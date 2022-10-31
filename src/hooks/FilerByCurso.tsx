import { useState, useEffect } from 'react';
import dataDB from '../api/dataDB';
import { GetIntegrantesPorCurso, GetMateriasPorCurso } from '../interfaces/dataInterface';

export const FilerByCurso = (cursoID: any) => {

    const [materiasCursos, setMateriasCursos] = useState<GetMateriasPorCurso[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [alumnosCursos, setAlumnosCursos] = useState<GetIntegrantesPorCurso[]>([])



    const GetMateriasForCursos = async() => {
        dataDB.get(`/Materia/GetMateriasForCombo?query=x => x.curso == "${cursoID}"`)
                .then( resp=>{
                    setMateriasCursos(resp.data)
                    setTimeout(()=>{
                        setIsLoading(false)
                    }, 1000)
                });
    }

     const GetAlumnosForCursos = async() => {
        dataDB.get(`/IntegrantesMaterias/GetIntegrantesMateriasForCombo?query=x => x.Materia.Curso == "${cursoID}" && x.Usuario.Perfil == "ALUMNO"`)
                .then( resp=>{
                    setAlumnosCursos(resp.data)
                    setTimeout(()=>{
                        setIsLoading(false)
                    }, 1000)
                });
    } 


    useEffect(() => {

    //Materias por Curso
    GetMateriasForCursos();

    //Alumnos por Curso
    GetAlumnosForCursos();

    }, [])
    
    return{
        materiasCursos,
        alumnosCursos,
        isLoading

    }

}
