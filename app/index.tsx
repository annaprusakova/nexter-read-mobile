import {View, StyleSheet} from "react-native";
import {Image} from "tamagui";
import {useEffect, useState} from "react";

export default function Index() {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFlag(true)
        }, 3000)
    },[]);


    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo2.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 400,
        height: 200
    }
});
