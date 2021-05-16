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
    bernard_woerly_alt,
    bernard_woerly_img, denis_chossiere_alt,
    denis_chossiere_img,
    gilles_goyault_alt,
    gilles_goyault_img, mehdi_lebbadi_img, mehdi_lebbadi_alt
} from "../../../assets/team";
import {tailleImageMd, tailleImageSm, tailleImageXs} from "./parametres";


const useStyles = makeStyles(teamsStyle);

export default function Radiologues({ ...rest }) {
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
              <h2 className={classes.title}>Radiologie interventionnelle</h2>
              <h5 className={classes.description}>
                Notre équipe de radiologues interventionnelles utilise l'imagerie médicale pour réaliser des interventions toujours plus précise et toujours moins invasive.
              </h5>
            </GridItem>
          </GridContainer>


            <GridContainer justify={"center"}>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={denis_chossiere_img} alt={denis_chossiere_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle} >Dr Denis CHOSSIERE</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Radiologue interventionnel</h6>
                            </Muted>
                        </CardBody>

                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={gilles_goyault_img} alt={gilles_goyault_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Gilles GOYAULT</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Radiologue interventionnel</h6>
                            </Muted>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={mehdi_lebbadi_img} alt={mehdi_lebbadi_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Dr Mehdi LEBBADI</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Radiologue interventionnel</h6>
                            </Muted>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem xs={tailleImageXs} sm={tailleImageSm} md={tailleImageMd}>
                    <Card profile plain>
                        <CardAvatar profile plain>
                            <img src={bernard_woerly_img} alt={bernard_woerly_alt} className={classes.img} />
                        </CardAvatar>
                        <CardBody>
                            <h4 className={classes.cardTitle} >Dr Bernard WOERLY</h4>
                            <Muted>
                                <h6 className={classes.cardCategory}>Radiologue interventionnel</h6>
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
