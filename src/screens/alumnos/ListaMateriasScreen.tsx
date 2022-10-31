import React from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDatas } from '../../hooks/useDatas';
import Icon from 'react-native-vector-icons/Feather';
import { FilerByCurso } from '../../hooks/FilerByCurso';
import { MostrarMateria } from '../../components/MostrarMateria';


interface Props extends NativeStackScreenProps<any,any>{};

const ListaMateriasScreen =({ navigation,route }:Props)=> {

    let params = route.params?.toString();

    const { materiasCursos,isLoading } = FilerByCurso(params);


    if (isLoading) {
        return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor: "#E6EBF1"}}>
            <ActivityIndicator  color="red" size={100}/>
        </View>
        )
    }

    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Materias de {params}</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
        
        { //Renderizo todo los objetos
            materiasCursos.map( item=>
                <TouchableOpacity
                key={item.id}
                style={{ 
                    ...styles.botonFlatList
                }}
                onPress={ () => navigation.navigate('ListaAlumnosScreen',{materia:item.nombre,curso:params})}
            >
                <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>{item.nombre}</Text>
                        <View style={styles.box}>
                            <Icon name="book" size={45} color="black" />
                        </View>
                </View>
            </TouchableOpacity> 
                )
        }
    
    </SafeAreaView>
    </View>
  )
}

export default ListaMateriasScreen;