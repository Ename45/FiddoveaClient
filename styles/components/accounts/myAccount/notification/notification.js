import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
        padding: 16,
        backgroundColor: '#516f8d', // Light gray background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notificationItem: {
        width: '100%',
        backgroundColor: '#c49999',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
    },
    notificationText: {
        fontSize: 16,
        textAlign: 'center', // Center text within the box
    },
});