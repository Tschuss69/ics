import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardAvatar from "../../../components/Card/CardAvatar.js";
import CardBody from "../../../components/Card/CardBody.js";


import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";


import {
    eric_alt,
    eric_img,
    gilles_rochoux_alt,
    gilles_rochoux_img,
    paola_di_marco_alt,
    paola_di_marco_img
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
              <h2 className={classes.title}>L'équipe d'échographiste et d'imagerie cardiaque</h2>
            </GridItem>
          </GridContainer>

          <GridContainer justify={"center"}>
              <GridItem xs={12} sm={3} md={3}>
                  <Card profile plain>
                      <CardAvatar profile plain>
                          <img src={paola_di_marco_img} alt={paola_di_marco_alt} className={classes.img} />
                      </CardAvatar>
                      <CardBody>
                          <h4 className={classes.cardTitle}>Dr Paola DI-MARCO</h4>
                          <ul className={classes.description} style={{textAlign: "left"}}>
                              <li>Ancien PH des hopitaux de Strasbourg</li>
                          </ul>
                      </CardBody>
                  </Card>
              </GridItem>

              <GridItem xs={12} sm={3} md={3}>
                  <Card profile plain>
                      <CardAvatar profile plain>
                          <img src={gilles_rochoux_img} alt={gilles_rochoux_alt} className={classes.img} />
                      </CardAvatar>
                      <CardBody>
                          <h4 className={classes.cardTitle}>Dr Gilles ROCHOUX</h4>
                          <ul className={classes.description} style={{textAlign: "left"}}>
                              <li>Ancien interne et assitant des hopitaux de Strasbourg</li>
                              <li>Ancien PH des hopitaux de Strasbourg</li>
                          </ul>
                      </CardBody>
                  </Card>
              </GridItem>

              <GridItem xs={12} sm={3} md={3}>
                  <Card profile plain>
                      <CardAvatar profile plain>
                          <img src={eric_img} alt={eric_alt} className={classes.img} />
                      </CardAvatar>
                      <CardBody>
                          <h4 className={classes.cardTitle}>Dr Eric QUIRING</h4>
                          <ul className={classes.description} style={{textAlign: "left"}}>
                              <li>Ancien interne et assitant des hopitaux de Strasbourg</li>
                              <li>Ancien PH et assitant des hopitaux de Strasbourg</li>
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
