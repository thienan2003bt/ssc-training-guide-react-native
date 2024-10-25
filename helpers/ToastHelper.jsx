import { ToastAndroid } from 'react-native'

const ToastHelper = () => {
    const toastDurations = {
        "SHORT": ToastAndroid.SHORT,
        "LONG": ToastAndroid.LONG,
    }

    const toastPositions = {
        "TOP": ToastAndroid.TOP,
        "BOTTOM": ToastAndroid.BOTTOM,
        "CENTER": ToastAndroid.CENTER,
    }
    
    
    const showToast = (message, position = "", duration = "SHORT") => { 
        if (!toastDurations[duration] || !toastPositions[position]) {
            return ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
        return ToastAndroid.showWithGravity(message, toastDurations[duration], toastPositions[position]);
    }

    return showToast;
}

export default ToastHelper;