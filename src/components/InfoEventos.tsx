import React from 'react'
import { ActivityIndicator, Text,  TouchableOpacity,  View } from 'react-native'
import { useDatas } from '../hooks/useDatas';
import { styles } from '../themes/appTheme'
import { GetEventosForCombo } from '../interfaces/dataInterface';
import { format } from "date-fns";


interface Props{
    evento:GetEventosForCombo;
}

export const InfoEventos = ({evento}:Props) => {

    const words = evento.fecha.split('T');
    const formatDate = words[0].split('-');
    const date =   formatDate[2] + '/' + formatDate[1] 


    return (
    <View>
        <View>
            <Text style={ styles.textoEvento }>{evento.nombre}</Text>
            <Text style={ styles.textoEvento }>Fecha: {date}</Text>
            <Text  numberOfLines={3} ellipsizeMode={'tail'} style={ styles.textoEvento }>{evento.descripcion}</Text>
        </View>
    </View>
    )
        
}