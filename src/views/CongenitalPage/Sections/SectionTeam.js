import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardAvatar from "../../../components/Card/CardAvatar.js";
import CardBody from "../../../components/Card/CardBody.js";
import Muted from "../../../components/Typography/Muted.js";

import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";



import {

    jelena_radojevic_alt,
    jelena_radojevic_img, jerome_petit_alt, jerome_petit_img,
    sebastien_hascoet_alt, sebastien_hascoet_img
} from "../../../assets/team";
import {tailleImageMd, tailleImageSm, tailleImageXs} from "./parametres";


const useStyles = makeStyles(teamsStyle);

export default function Cardiopediatres({ ...rest }) {
    const classes = useStyles();
    return (
        <div className="cd-section" {...rest}>
            {/* Team 1 START */}
            <div className={classes.team}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem
                            xs={12}
                            sm={8}
                            md={8}
                            className={
                                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                            }
                        >
                            <h2 className={classes.title}>L'équipe de cardiopédiatrie et des cardiopathies congénitales de l'enfant et de l'adulte</h2>
                            <h5 className={classes.description}>
                                L'équipe est constituée d’une cardiopédiatre à temps plein s’occupant du diagnostic antenatal, des pathologies cardiaques de l’enfant et des cardiopathies congénitales de l’adulte et deux cardiopédiatres consultants du centre de référence des malformations cardiaques congénitales complexes du reseau M3C l’hôpital Marie Lannelongue pour l’activité de cathéterisme cardiaque diagnostic et interventionnel.
                            </h5>
                        </GridItem>
                    </GridContainer>

                    <GridContainer justify={"center"}>
                        <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                            <Card profile plain>
                                <CardAvatar profile plain>
                                    <img src={jelena_radojevic_img} alt={jelena_radojevic_alt} className={classes.img} />
                                </CardAvatar>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Dr Jelena RADOJEVIC</h4>
                                    <Muted>
                                        <h6 className={classes.cardCategory}>Cardiologue - Pathologie congenitale de l'enfant et de l'adulte</h6>
                                    </Muted>
                                </CardBody>
                            </Card>
                        </GridItem>




                        <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                            <Card profile plain>
                                <CardAvatar profile plain>
                                    <img src={sebastien_hascoet_img} alt={sebastien_hascoet_alt} className={classes.img} />
                                </CardAvatar>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Dr Sébastien HASCOET</h4>
                                    <Muted>
                                        <h6 className={classes.cardCategory}>Cardiologue - Pathologie congenitale de l'enfant et de l'adulte</h6>
                                    </Muted>
                                </CardBody>
                            </Card>
                        </GridItem>


                        <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                            <Card profile plain>
                                <CardAvatar profile plain>
                                    <img src={jerome_petit_img} alt={jerome_petit_alt} className={classes.img} />
                                </CardAvatar>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Dr Jérome PETIT</h4>
                                    <Muted>
                                        <h6 className={classes.cardCategory}>Cardiologue - Pathologie congenitale de l'enfant et de l'adulte</h6>
                                    </Muted>
                                </CardBody>
                            </Card>
                        </GridItem>




                    </GridContainer>
                </div>
            </div>
            {/* Team 1 END */}


        </div>
    );
}
