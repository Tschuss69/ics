/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";

import shoppingCartStyle from "./../../assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import planDacces from "../../assets/img/plan/plan_localisation.png";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import {ICSFooter} from "../../components/Footer/ICSFooter";

import backgroundimage from "../../assets/img/icsRhenaExterieur.jpg";





const fontSizeP = {fontSize : "18px"}




const useStyles = makeStyles(shoppingCartStyle);

export default function Localisation() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                brand={"ICS"}
                links={<ICSHeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "info"
                }}
            />

            <Parallax
                image={backgroundimage}
                filter="dark"
                small
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto,
                                classes.textCenter
                            )}
                        >
                            <h2 className={classes.title}>Comment venir ?</h2>
                            <h3 className={classes.title}>En voiture ou en transport en commun la clinique Rhéna est facilement accessible.</h3>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Card plain>
                        <CardBody plain>
                            <h2>
                                En voiture
                            </h2>
                            <p style={fontSizeP}>
                                <strong>Depuis l’autoroute A4 (Nord de Strasbourg) :</strong> sortie Place de Haguenau, Avenue des Vosges puis Avenue de la Forêt Noire, puis suivre Rhéna
                            </p>
                            <p style={fontSizeP}>
                                <strong>Depuis l’autoroute A35 (Ouest ou Sud de Strasbourg) :</strong> sortie Place de L’Étoile, Direction Kehl / Jardin des Deux rives, puis suivre Rhéna
                            </p>
                            <p style={fontSizeP}>
                                <strong>Depuis l’A35 (Sud / Sud-Est de Strasbourg) :</strong> direction Offenbourg, puis Port de Strasbourg, puis suivre Rhéna
                            </p>

                            <br/>


                        </CardBody>
                    </Card>
                </div>
            </div>

            <br/>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Card plain>
                        <CardBody plain>
                            <h2>
                                Tramway
                            </h2>
                            <p style={fontSizeP}>
                                <strong>Ligne D :</strong> station  "Port du Rhin"
                            </p>

                            <h2>Bus</h2>
                            <p style={fontSizeP}>
                                <strong>Ligne 2  :</strong> arrêt "Port du Rhin"
                            </p>


                        </CardBody>
                    </Card>
                </div>
            </div>

            <br/>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Card plain>
                        <CardBody plain>
                            <h2>Plan d'acces</h2>
                            <img
                                src={planDacces}
                                alt="plan d'acces Rhéna"
                                className={classes.imgCard}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>

            <br/>




            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Card plain>
                        <CardBody plain>
                            <h2>Les parkings</h2>

                            <h3>Parking couvert</h3>
                            <p style={fontSizeP}> Accessible depuis la rue Catherine Kany</p>
                            <div style={fontSizeP}>
                                Emplacements réservés pour  :

                                <ul>
                                    <li>les Personnes à Mobilité Réduite</li>
                                    <li>les 2 roues</li>
                                    <li>les véhicules électriques avec bornes de recharge (Pass Freshsmile)</li>
                                </ul>

                                Afin de favoriser votre confort des patients et des visiteurs, un salon d’attente est à votre disposition au rez-de-chaussée du parking. Ainsi, vous pouvez y déposer son proche hospitalisé dans l’attente de stationner ou de récupérer votre véhicule dans les étages.
                            <br/>
                                Parking payant au-delà de 30 minutes
                            </div>



                            <h3>Parking des Urgences (pour les douleurs thoraciques - réservé aux service des urgences)</h3>
                            <div style={fontSizeP}>
                                Accessible depuis la rue Catherine Kany
                            <br/>
                                Gratuit uniquement pour les patients pris en charge en urgence
                            <br/>
                                Il est accessible aux autres patients avec une durée limitée à 20 minutes pour éviter son encombrement
                            </div>


                            <h3>Parking dépose-minute</h3>
                            <div style={fontSizeP}>
                                Accessible depuis la rue Catherine Kany
                            <br/>
                                Stationnement limité à 20 minutes pour déposer ou venir chercher un patient à proximité immédiate de la Clinique et de la Maison Médicale des 2 Rives
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <ICSFooter/>


        </div>
    );
}
