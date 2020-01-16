import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    select: {
        minWidth: 150,
    }
}));