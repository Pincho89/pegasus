import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends NativeStackScreenProps<any,any>{};



const HomeScreen =({ navigation }: Props)=> {

    


    return (
    <View style={styles.fondoApp}>
    <SafeAreaView style={{marginTop:100}}><Text style={styles.title}>Menu Principal</Text></SafeAreaView>   
    <SafeAreaView style={{ alignItems: 'center',justifyContent:'space-around'}}>    
        <ScrollView style={styles.menuContainer}>

            <View style={{flexDirection:'row',}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Calificaciones</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Asistencias</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>   
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaContactosScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Contactos</Text>
                        <View style={styles.box}>
                            <Icon name="bluetooth" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaEventosScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Eventos</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>  
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Cursos</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaCuadernoScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Cuaderno</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>  
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaMateriasScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Materias</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaContactosScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Tareas</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>  
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaDesempenioScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Desempeño</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaContactosScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Usuarios</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>  
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonFlatList,
                    }}
                    onPress={ () => navigation.navigate('ListaPagosScreen')}
                >
                    <View style={styles.containerTexto} >
                    <Text style={ styles.textoFlatlist }>Pagos</Text>
                        <View style={styles.box}>
                            <Icon name="file-text" size={45} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default HomeScreen;