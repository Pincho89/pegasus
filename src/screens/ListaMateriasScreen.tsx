import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaMateriasScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Materias</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
            <TouchableOpacity
                style={{ 
                    ...styles.botonFlatList,
                }}
                onPress={ () => navigation.navigate('ListaAlumnosScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Curso1</Text>
                <Image
                    source={{uri: 'https://i.pinimg.com/564x/cc/ff/60/ccff6049e906fb0e1f5babe20db1a065.jpg'}}
                    style={styles.box}
                />
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity
                style={{ 
                    ...styles.botonFlatList,
                }}
                onPress={ () => navigation.navigate('ListaMateriasScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Curso2</Text>
                <Image
                    source={{uri: 'https://i.pinimg.com/564x/cc/ff/60/ccff6049e906fb0e1f5babe20db1a065.jpg'}}
                    style={styles.box}
                />
                </View>
                
            </TouchableOpacity>



              
    </SafeAreaView>
    </View>
  )
}

export default ListaMateriasScreen;