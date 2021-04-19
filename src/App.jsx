import React, {useEffect, useState} from 'react'
import {
    Typography, 
    CssBaseline, 
    AppBar, 
    Toolbar,
    Grid} from '@material-ui/core';

import customStyles from './styles';

export default function App() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const fetchApi = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice', 
                {
                    method: 'GET',
                }
            )
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data)=> {
                setLoading(false);
                setData(data.slip.advice);
                return
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
            })
    }

    useEffect(() => {
        fetchApi();
    }, [])

    const classes = customStyles();

    return (
        <>
        <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <main className={classes.container}>
            {
                loading ? 
                    (
                        <div className={classes.loader}>
                            <div className={classes.loaderBar}></div>
                        </div>
                    ) 
                : 
                    (
                        <Grid container
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '90vh' }}>
                                <Typography variant="h3" align="center" color="textPrimary">
                                    {data}
                                </Typography>
                        </Grid>
                    )
            }
            </main>
        </>
    )
}
