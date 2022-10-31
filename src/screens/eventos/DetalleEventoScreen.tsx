import React from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDatas } from '../../hooks/useDatas';
import { InfoEventos } from '../../components/InfoEventos';
import { DetalleEventos } from '../../components/DetalleEventos';

interface Props extends NativeStackScreenProps<any,any>{};

const DetalleEventoScreen =({ route }:Props)=> {

    const params = route.params;


    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Detalle Evento</Text></SafeAreaView>
    <View>
            <Text>{JSON.stringify(params,null)}</Text>
        </View>
    </View>
  )
}

export default DetalleEventoScreen;