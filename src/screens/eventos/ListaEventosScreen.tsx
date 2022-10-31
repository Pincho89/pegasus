import React from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDatas } from '../../hooks/useDatas';
import { InfoEventos } from '../../components/InfoEventos';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaEventosScreen =({ navigation }:Props)=> {

    const { eventos,isLoading } = useDatas();

    if (isLoading) {
        return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor: "#E6EBF1"}}>
            <ActivityIndicator  color="red" size={100}/>
        </View>
        )
    }
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Eventos</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerDatosInstitucion}>
        <View style={styles.boxContactoContainer}>
            <Image
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/1458/1458512.png'}}
                style={styles.boxContacto}
            />
        </View>
    </SafeAreaView>
        <TouchableOpacity
            disabled={true}
            style={{ 
                ...styles.botonEventos,
            }}
            //onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
        >
            <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                <InfoEventos evento={eventos[0]}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
            disabled={true}
            style={{ 
                ...styles.botonEventos,
            }}
            //onPress={ () => navigation.navigate('DetalleEventoScreen',eventos[0])}
        >
            <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                <InfoEventos evento={eventos[1]}/>
            </View>
        </TouchableOpacity>

        
    </View>
  )
}

export default ListaEventosScreen;