import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Feather';


import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaCursosScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Cursos</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerCursos}>
               
        <View style={{flexDirection:'row',flex:0.5}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen','1°A')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>1 A</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen','1°B')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>1 B</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>   
        </View>

        <View style={{flexDirection:'row',}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen','2°A')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>2 A</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen','2°B')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>2 B</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>   
        </View>
                      
    </SafeAreaView>
    </View>
  )
}

export default ListaCursosScreen;