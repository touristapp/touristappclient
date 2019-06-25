// React imports
import React from 'react';

// Styles imports
import Style from '../../../styles/createRoute';
import { colors } from '../../../styles/themes/variables';

// Hooks imports
import useInput from '../../../hooks/useInputs';
import { useStateValue } from '../../../hooks/state'


// Components imorts
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function CreateRoute() {  
    const depart = useInput();
    const arrivee = useInput();

    fetchData = async () =>{
        //alert('Fetching!')
        alert(`Fetching data from ${depart.value} to ${arrivee.value}`)
        const data = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${depart.value}&destination=${arrivee.value}&key=${process.env.GOOGLE_MAPS_API_KEY}`
        , {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // "Authorization": GOOGLE_MAPS_API_KEY,
                },
                method: "GET"
        })
        return data;
        console.log(data)

    }

    return (
        <>
            <View style={Style.banner}>
                <Text style={Style.bannerText}>Créer un itinéraire</Text>
            </View> 
            <View style={Style.mainContainer}>
                <View style={Style.form}>
                    <TextInput
                        selectionColor={colors.FIRE}
                        mode='outlined'
                        label='Départ'
                        style={Style.input}
                        dense={true}
                        {...depart}
                    />
                    <TextInput
                        selectionColor={colors.FIRE}
                        mode='outlined'
                        label='Arrivée'
                        style={Style.input}
                        dense={true}
                        {...arrivee}
                    />
                    <Button 
                        style={Style.searchButton} 
                        icon="search" 
                        mode="contained"
                        onPress= {fetchData}>
                        Rechercher
                    </Button>
                </View>
            </View>
        </>
    )
}