import React from 'react'
import { Text, View } from 'react-native'
import { useDatas } from '../hooks/useDatas';
import { styles } from '../themes/appTheme'
import { GetEventosForCombo } from '../interfaces/dataInterface';



interface Props{
    evento:GetEventosForCombo;
}

export const DetalleEventos = ({evento}:Props) => {


  return (
    <View style={styles.boxContainerInfoDatos}>
        <View>
            <Text>{evento.nombre}</Text>
            <Text>{evento.fecha}</Text>
            <Text>{evento.descripcion}</Text>
        </View>
    </View>

  )
}