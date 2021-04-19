import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles((theme) => ({
    //Custom Classes
    container: {
        margin: 0
    },
    loader: {
        width: "50%",
        margin: "auto",
        borderRadius: 10,
        border: "4px solid black",
        position: "fixed",
        padding: 10,
        top: "50%",
        right: "25%",
        '&::before': {
            content:'',
            border: "2 solid blue", 
            borderRadius: 10,
            position: "absolute",
            top: -4, 
            right: -4, 
            bottom: -15, 
            left: -4,
        },
    },
    loaderBar: { 
        position: "absolute",
        borderRadius: 10,
        bottom:0,
        left:0,
        background: "#3F51B5", 
        width:0,
        height: 19,
        animation: "$borealisBar 1.5s linear infinite",
    },

    // Key Frames
    "@keyframes borealisBar": {
        "0%": {
            left: "0%",
            right: "100%",
            width: "0%",
        },
        "10%": {
            left: "0%",
            right: "75%",
            width: "25%",
        },
        "90%": {
            right: "0%",
            left: "75%",
            width: "25%",
        },
        "100%": {
            left: "100%",
            right: "0%",
            width: "0%",
        },
    }
}));

export default customStyles; 