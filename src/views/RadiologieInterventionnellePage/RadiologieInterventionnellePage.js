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


import backgroundImage from "../../assets/img/salleInterventionnelle.jpg"


/*
*  <Helmet>
            <title>Radiologie interventionnelle - ICS</title>
            <meta name="description" content="Page de présentation de l'équipe de radiologie interventionnelle de l'ICS à la clinique Rhéna de Starsbourg" />
            <meta name="keywords" content="ICS, radiologie interventionnelle, institut cardio vasculaire de Strasbourg, Rhena" />
        </Helmet>

* */

const useStyles = makeStyles(presentationStyle);

export default function RadiologieInterventionnellePage() {
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
        image={backgroundImage}
        className={classes.parallax}
        filter="dark"
      >
          <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Radiologie interventionnelle
                  <span className={classes.proBadge}>ICS</span>
                </h1>
                <h3 className={classes.title}>
                 Spécialité ayant pour objectif de réaliser les intervention de manière mini invasive à l'aide de l'imagerie médicale.
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
