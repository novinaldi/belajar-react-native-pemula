import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        backgroundColor: '#4a148c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: '#fff',
        fontFamily: 'RobotoMono-Bold',
        fontSize: 30
    },
    content: {
        flex: 1
    },
    kotak: {
        paddingVertical: 0,
        backgroundColor: '#f3e5f5',
        marginVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 5,
        borderRadius: 50,
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1
    },
    img: {
        width: 80, height: 80, borderTopLeftRadius: 50, borderBottomLeftRadius: 50
    },
    textNama: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'RobotoMono-Regular'
    }
});

export { style };
