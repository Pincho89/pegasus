import React, { useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../themes/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GetIntegrantesPorCurso,GetAsistenciaByID } from '../interfaces/dataInterface';
import { CustomSwitch } from './CustomSwitch';
import { FilterById } from "../hooks/FilterById";

interface Props{
    alumno:GetIntegrantesPorCurso;
}



export const MostrarAlumno = ({alumno}:Props) => {


const { asistencia } = FilterById(alumno.id);

console.log(asistencia)

const boolAsis = Boolean(asistencia);

const onChange = ( boolAsis: boolean, field: string ) => {
    setState({
        ...state,
        [field]: boolAsis
    });
    }
  
const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
});

    const { isActive, isHungry, isHappy } = state;


return (
    
//Como hacer si vienen 3 elementos para que no rompa
    <Text style={ styles.textoAlumnos }> 
        <Icon name="user" size={25} color={"black"}/>  {alumno.usuario.nombre}
{         <CustomSwitch isOn={ boolAsis } onChange={ (boolAsis) => onChange( boolAsis, asistencia.toString() ) } />
 }    </Text>
  )
}
