import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Feather';


import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaContactosScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Contacto</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
            <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('DatosInstitucionScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Institución</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaDocentesScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Docentes</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>


              
    </SafeAreaView>
    </View>
  )
}

export default ListaContactosScreen;