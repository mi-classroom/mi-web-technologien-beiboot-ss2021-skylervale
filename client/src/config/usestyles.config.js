import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: "#212121",
        color: "#FFCC00",
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
    }
}), {index: 1});