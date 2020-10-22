import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl, AppBar, Toolbar, Typography} from '@material-ui/core';

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const CountryPicker = ( { handleCountryChange } ) =>{
   const classes = useStyles();
    const [fetchedCountries, setFetchcountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchcountries(await fetchCountries());
        }
        fetchAPI();
    }, [fetchedCountries])

    return (

      <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography className={styles.title} variant="h7" noWrap>Covid-19 </Typography>
          <div className={styles.country_input}>
            <FormControl className={classes.formControl}>
                <NativeSelect defaultValue="" 
                onChange={(e) => handleCountryChange(e.target.value)} className={styles.dd_selector}>
                    <option value="" className={styles.Items}>Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
















     
    )
}
export default CountryPicker;