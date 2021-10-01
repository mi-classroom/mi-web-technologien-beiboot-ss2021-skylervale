import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "0px",
        color: "#FFCC00",
        backgroundColor:  "#212121",
        display: "flex"
    },
    myButton: {
        margin: theme.spacing(1),
        backgroundColor: 'gold',
        '&:hover': {
            background: "#ff9800",
        },
        color: 'white',
        float: 'right',
    },
    span:{
        fontSize: "15px"
    },
    collaps:{
        position:"fixed",
        bottom:"0"
    },
    search:{
        color: "rgb(187, 137, 10)"
    },
    details:{
        color: "rgb(187, 137, 10)" 
    },
    sidebar:{
        width: '20rem',
        maxHeight: '89.4vh',
        overflow: 'auto'
    },
    padding:{
        padding: "3%"
    },
    mainCard:{
        width: "100rem",
        backgroundColor: "#000"
    },
    jsonView:{
        backgroundColor: "rgb(255 255 255)"
    }
}), {index: 1});