import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardAvatar from "../../../components/Card/CardAvatar.js";
import CardBody from "../../../components/Card/CardBody.js";


import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";


import {
    babe_bakouboula_alt,
    babe_bakouboula_img,
    eric_alt,
    eric_img,
    mathieu_alt,
    mathieu_img
} from "../../../assets/team";


const useStyles = makeStyles(teamsStyle);

export default function SectionTeam({ ...rest }) {
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
              <h2 className={classes.title}>L'équipe de rythmologie</h2>
            </GridItem>
          </GridContainer>
          <GridContainer justify={"center"}>

            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                    <img src={mathieu_img} alt={mathieu_alt} className={classes.img} />
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Dr Mathieu SCHAAF</h4>
                        <ul className={classes.description} style={{textAlign: "left"}}>
                            <li>Ancien interne des hôpitaux de Lyon</li>
                            <li>Ancien chef de clinique des hôpitaux de lyon</li>
                            <li>Compagnonnage de 3 ans dans un groupe spécialisé dans le traitement interventionnel rythmologique (ADRIS - LYON)</li>
                            <li>DIU d'échographie cardiaque</li>
                            <li>DIU rythmologie interventionnelle</li>
                            <li>DIU Imagerie cardiaque</li>
                        </ul>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                    <img src={eric_img} alt={eric_alt} className={classes.img} />
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Dr Eric QUIRING</h4>

                    <ul className={classes.description} style={{textAlign: "left"}}>
                        <li>Ancien interne des hôpitaux de Strasbourg</li>
                        <li>Ancien chef de clinique des hôpitaux de Strasbourg</li>
                        <li>Ancien Praticien Hospitalier au CHU de Strasbourg</li>
                    </ul>
                </CardBody>

              </Card>
            </GridItem>

              <GridItem xs={12} sm={4} md={4}>
                  <Card profile plain>
                      <CardAvatar profile plain>
                              <img src={babe_bakouboula_img} alt={babe_bakouboula_alt} className={classes.img} />
                      </CardAvatar>
                      <CardBody>
                          <h4 className={classes.cardTitle}>Dr Babe BAKOUBOULA</h4>
                          <ul className={classes.description} style={{textAlign: "left"}}>
                              <li>Ancien interne des hôpitaux de Strasbourg</li>
                              <li>Ancien chef de clinique des hôpitaux de Strasbourg</li>
                              <li>Ancien Praticien Hospitalier au CHU de Strasbourg</li>
                              <li>DIU d'échographie cardiaque</li>
                              <li>DIU rythmologie interventionnelle</li>
                          </ul>
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
