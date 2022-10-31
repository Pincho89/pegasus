import React from 'react'
import { Text, View } from 'react-native'
import { useDatas } from '../hooks/useDatas';
import { styles } from '../themes/appTheme'
import { GetContactosForCombo } from '../interfaces/dataInterface';



interface Props{
    contacto:GetContactosForCombo;
}

export const DetalleContactoInstitucion = ({contacto}:Props) => {


  return (
    <View style={styles.boxContainerInfoDatos}>
        <View>
            <Text>{contacto.nombre}</Text>
            <Text>{contacto.mail}</Text>
            <Text>{contacto.telefono}</Text>
        </View>
    </View>

  )
}