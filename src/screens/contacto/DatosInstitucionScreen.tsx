import React from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDatas } from '../../hooks/useDatas';
import { InfoContactosInstitucion } from '../../components/InfoContactosInstitucion';

interface Props extends NativeStackScreenProps<any,any>{};

const DatosInstitucionScreen =({ navigation }:Props)=> {

    const { contactos,isLoading } = useDatas();

    if (isLoading) {
        return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor: "#E6EBF1"}}>
            <ActivityIndicator  color="red" size={100}/>
        </View>
        )
    }

    const ItemSeparator = () =>{
        return(
          <View style={{
            borderBottomWidth: 0,
            opacity:0.4,
            marginVertical:8}}>
            
          </View>
        )
      }

    function renderItem (){
        contactos.forEach(element => {
            return(
                <View>
                      <TouchableOpacity
                          style={{ 
                              ...styles.botonContactoInstitucion,
                          }}
                          onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
                      >
                          <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                              <InfoContactosInstitucion contacto={element}/>
                          </View>
                      </TouchableOpacity>
                </View> 
              )
        });
      }


    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Institucion</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerDatosInstitucion}>
        <View style={styles.boxContactoContainer}>
            <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Eucalyp-Deus_High_School.png'}}
                style={styles.boxContacto}
            />
        </View>
    </SafeAreaView>
        <View>
                <TouchableOpacity
                    disabled={true}
                    style={{ 
                        ...styles.botonContactoInstitucion,
                    }}
                    //onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
                >
                    <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                        <InfoContactosInstitucion contacto={contactos[0]}/>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                    disabled={true}
                    style={{ 
                        ...styles.botonContactoInstitucion,
                    }}
                    //onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
                >
                    <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                        <InfoContactosInstitucion contacto={contactos[1]}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={true}
                    style={{ 
                        ...styles.botonContactoInstitucion,
                    }}
                    //onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
                >
                    <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                        <InfoContactosInstitucion contacto={contactos[2]}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={true}
                    style={{ 
                        ...styles.botonContactoInstitucion,
                    }}
                    //onPress={ () => navigation.navigate('DetalleEventoScreen',element)}
                >
                    <View style={{justifyContent:'flex-start',alignContent:'center'}}>
                        <InfoContactosInstitucion contacto={contactos[3]}/>
                    </View>
                </TouchableOpacity>
        </View> 
    </View>
  )
}

export default DatosInstitucionScreen;