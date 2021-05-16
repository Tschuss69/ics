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
    aurelie_herrmann_alt,
    aurelie_img,
    babe_bakouboula_alt,
    babe_bakouboula_img,
    eric_alt,
    eric_img,
    gilles_rochoux_alt, gilles_rochoux_img,
    mathieu_alt,
    mathieu_img, michel_chauvin_alt, michel_chauvin_img, nicolas_lhoest_alt,
    nicolas_lhoest_img, paola_di_marco_img, xavier_lamit_alt, xavier_lamit_img
} from "../../../assets/team";
import {tailleImageMd, tailleImageSm, tailleImageXs} from "./parametres";


const useStyles = makeStyles(teamsStyle);

export default function Cardiologues({ ...rest }) {
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
              <h2 className={classes.title}>Les cardiologues</h2>
              <h5 className={classes.description}>
                Chaque cardiologue de notre équipe est sur-spécialisé dans un domaine. Que ce soit en coronarographie, rythmologie ou imagerie cardiaque, notre équipe saura vous proposer toutes les interventions réalisables à ce jour en cardiologie.
              </h5>
            </GridItem>
          </GridContainer>

            <GridContainer justify={"center"}>


                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={babe_bakouboula_img} alt={babe_bakouboula_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Babe BAKOUBOULA</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Rythmologue</h6>
                            </Muted>
                        </CardBody>

                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={michel_chauvin_img} alt={michel_chauvin_alt} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Pr Michel CHAUVIN</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Rythmologue</h6>
                            </Muted>

                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={paola_di_marco_img} alt={paola_di_marco_img} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Paola DI MARCO</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Echographiste</h6>
                            </Muted>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={aurelie_img} alt={aurelie_herrmann_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr HERMANN-FRICKER Aurélie</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue attachée</h6>
                            </Muted>
                        </CardBody>

                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={xavier_lamit_img} alt={xavier_lamit_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Xavier LAMIT</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Coronarographiste</h6>
                            </Muted>
                        </CardBody>

                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                                <img src={nicolas_lhoest_img} alt={nicolas_lhoest_alt} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Nicolas LHOEST</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Coronarographiste</h6>
                            </Muted>

                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={eric_img} alt={eric_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Eric QUIRING</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Coronarographiste</h6>
                            </Muted>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={gilles_rochoux_img} alt={gilles_rochoux_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Gilles ROCHOUX</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Coronarographiste</h6>
                            </Muted>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={mathieu_img} alt={mathieu_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Mathieu SCHAAF</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Cardiologue - Rythmologue</h6>
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
