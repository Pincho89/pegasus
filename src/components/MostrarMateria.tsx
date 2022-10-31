import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../themes/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GetMateriasPorCurso } from '../interfaces/dataInterface';

interface Props{
    materia:GetMateriasPorCurso;
}

export const MostrarMateria = ({materia}:Props) => {
  
return (
    
//Como hacer si vienen 3 elementos para que no rompa

    <TouchableOpacity
        style={{ 
            ...styles.botonFlatList
        }}
        /* onPress={ () => navigation.navigate('ListaAlumnosScreen')} */
    >
        <View style={styles.containerTexto} >
            <Text style={ styles.textoFlatlist }>{materia.nombre}</Text>
                <View style={styles.box}>
                    <Icon name="book" size={45} color="black" />
                </View>
        </View>
    </TouchableOpacity> 
  )
}
