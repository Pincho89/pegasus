import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaEventosScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Eventos</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerDatosInstitucion}>
        <View style={styles.boxContactoContainer}>
            <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Eucalyp-Deus_High_School.png'}}
                style={styles.boxContacto}
            />
        </View>
    </SafeAreaView>
        <View style={styles.boxContainerInfoDatos}>
            <Text style={styles.mostrarInfo}>Rectora: Maria Gomez</Text>
            <Text style={styles.mostrarInfo}>Vice Rectora: Beatriz Alvarez </Text>
            <Text style={styles.mostrarInfo}>Preceptor: Ignacion Fuentes </Text>
        </View>
    </View>
  )
}

export default ListaEventosScreen;