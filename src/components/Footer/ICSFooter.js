import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "../../components/Footer/Footer.js";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import {
    url_congenital,
    url_coronarographie,
    url_echographie,
    url_localisation,
    url_radiologie,
    url_rythmologie
} from "../../index";


import {FiPhone} from "react-icons/fi";

import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";


const useStyles = makeStyles(styles);



export function ICSFooter(){


    const classes = useStyles();

    return(
        <Footer
            theme="dark"
            content={
                <div>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_localisation} className={classes.block}>
                                    Ou nous trouver ?
                                </Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_rythmologie} className={classes.block}>
                                    Rythmologie
                                </Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_coronarographie} className={classes.block}>
                                    Coronarographie
                                </Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_radiologie} className={classes.block}>
                                    Radiologie interventionnelle
                                </Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_congenital} className={classes.block}>
                                    Cardio-congénitale
                                </Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link to={url_echographie} className={classes.block}>
                                    Imagerie cardiaque - Echographie
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </div>
            }
        >
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <h5>A propos de nous</h5>
                    <p>Pôle spécialisé dans le diagnostic et le traitement des maladies cardiovasculaires pour l’adulte et l’enfant, l'ICS est composée d'une équipe de cardiologues, cardiopédiatres et radiologues interventionnels. Dôté de matériel de dernière génération, l'équipe de l'ICS est spécialisée dans les interventions guidées par l'imagerie médicale, grandement utilisé pour toutes les pathologies cardio-vasculaires.</p>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                        <h5>Nous contacter</h5>
                    <GridContainer direction="row">

                        <GridItem xs={12} sm={6} md={6}>
                            <div className={classes.socialFeed}>
                                <h6>
                                    Rythmologie - Coronarographie - Echographie cardiaque :
                                </h6>
                                <div>
                                    <FiPhone/>    03.88.36.52.83
                                </div>
                                <h6>
                                    Service de soins intensifs :
                                </h6>
                                <div>
                                    <FiPhone/>    03.88.67.42.40
                                </div>
                            </div>
                        </GridItem>



                        <GridItem xs={12} sm={6} md={6}>
                            <div className={classes.socialFeed}>
                                <h6>
                                    Radiologie interventionnelle :
                                </h6>
                                <div>
                                    <FiPhone/>    03.90.67.39.91
                                </div>
                                <h6>
                                    Cardiopathie congénitale :
                                </h6>
                                <div>
                                    <FiPhone/>    03.88.XX.XX.XX
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </Footer>
    )
}

