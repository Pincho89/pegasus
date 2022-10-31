import React from 'react'
import { ActivityIndicator, Text,  TouchableOpacity,  View } from 'react-native'
import { useDatas } from '../hooks/useDatas';
import { styles } from '../themes/appTheme'
import { GetContactosForCombo } from '../interfaces/dataInterface';

interface Props{
    contacto:GetContactosForCombo;
}

export const InfoContactosInstitucion = ({contacto}:Props) => {

    //Hacer un render item

    return (
    <View>
        <View>
            <Text style={ styles.textoEvento }>{contacto.nombre}</Text>
            <Text style={ styles.textoEvento }>Mail: {contacto.mail}</Text>
            <Text style={ styles.textoEvento }>Teléfono: {contacto.telefono}</Text>
        </View>
    </View>
    )
        
}