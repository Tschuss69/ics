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
// sections for this page
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import SectionTeam from "./Sections/SectionTeam";
import SectionMenu from "./Sections/SectionMenu";
import {ICSFooter} from "../../components/Footer/ICSFooter";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";

import backgroundimage from '../../assets/img/salleInterventionnelle.jpg'



/*
* <Helmet>
            <title>Imagerie - ICS</title>
            <meta name="description" content="Page de présentation de l'équipe d'imégerie cardiaque de l'ICS à la clinique Rhéna de Starsbourg" />
            <meta name="keywords" content="ICS, IRM cardiaque, scanner cardiaque, institut cardio vasculaire de Strasbourg, Rhena" />
        </Helmet>
* */


const useStyles = makeStyles(presentationStyle);

export default function EchographiePage() {
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
        className={classes.parallax}
        filter="dark"
      >
          <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Echographie cardiaque - Imagerie cardiaque
                  <span className={classes.proBadge}>ICS</span>
                </h1>
                <h3 className={classes.title}>
                 Notre équipe est présente pour réaliser toutes les échographies cardiaques trans-thoraciques et trans-oesophagiennes
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>




          <GridContainer justify="center">
              <GridItem xs={12} md={11}>
                  <Card blog>
                      <CardBody>
                          <SectionTeam />
                      </CardBody>
                  </Card>
                  <Card blog>
                      <CardBody>
                          <SectionMenu/>
                      </CardBody>
                  </Card>

              </GridItem>
          </GridContainer>


     <ICSFooter/>
    </div>
  );
}
