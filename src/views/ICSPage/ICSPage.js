/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Parallax from "../../components/Parallax/Parallax.js";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// sections for this page
import SectionDescription from "./Sections/SectionDescription.js";

import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import SectionSpecialite from "./Sections/SectionSpecialite";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import {ICSFooter} from "../../components/Footer/ICSFooter";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import Cardiologues from "./Sections/Cardiologues";
import Cardiopediatres from "./Sections/Cardiopediatres";
import Radiologues from "./Sections/Radiologues";


/*
* <Helmet>
            <title>Institut cardio-vasculaire de Strasbourg</title>
            <meta name="description" content="Page de présentation de l'institut cardio vasculaire de Strasbourg à la clinique Rhéna" />
            <meta name="keywords" content="ICS, institut cardio vasculaire de Strasbourg, Rhena" />
        </Helmet>
* */

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
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
        image={require("../../assets/img/icsRhenaExterieur.jpg")}
        className={classes.parallax}
        filter="dark"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Institut cardio-vasculaire de Strasbourg
                  <span className={classes.proBadge}>ICS</span>
                </h1>
                <h3 className={classes.title}>
                  Institut spécialisé dans le traitement interventionnel des pathologies cardio-vasculaires
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
                        <SectionDescription />
                    </CardBody>
                </Card>
                <Card blog>
                    <CardBody>
                        <SectionSpecialite/>
                    </CardBody>
                </Card>

                <Card blog>
                    <CardBody>
                        <Cardiologues/>
                    </CardBody>
                </Card>

                <Card blog>
                    <CardBody>
                        <Cardiopediatres/>
                    </CardBody>
                </Card>

                <Card blog>
                    <CardBody>
                        <Radiologues/>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>




        <ICSFooter/>

    </div>
  );
}
