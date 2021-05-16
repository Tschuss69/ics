import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

// @material-ui icons


import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import {Link} from "react-router-dom";
import {
    url_listeProcedurePatient,
    url_localisation
} from "../../../index";

const useStyles = makeStyles({...teamsStyle, ...descriptionStyle});

export default function SectionMenu() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <div className={classes.features}>
            <GridContainer>
                <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                    }
                >
                    <h2 className={classes.title}>Plus d'informations</h2>

                </GridItem>
            </GridContainer>
          <GridContainer>
            <GridItem md={6} sm={6}>
                <Link to={{
                    pathname: url_listeProcedurePatient,
                    search: "?active=0"
                }} className={classes.dropdownLink}>
                  <InfoArea
                    title="Informations sur votre intervention - consentement"
                    description=""
                    icon={AirlineSeatFlatAngledIcon}
                    iconColor="info"
                    vertical={true}
                  />
                </Link>
            </GridItem>


              <GridItem md={6} sm={6}>
                  <Link to={url_localisation}>
                      <InfoArea
                          title="Comment venir ?"
                          description=""
                          icon={NotListedLocationIcon}
                          iconColor="danger"
                          vertical={true}
                      />
                  </Link>
              </GridItem>

          </GridContainer>
        </div>
      </div>
    </div>
  );
}




/**
 *
 *  <GridItem md={4} sm={4}>
 <Link to={url_listePathologieRythmoPatient}>
 <InfoArea
 title="En savoir plus sur votre pathologie"
 description="Fiches explicatives sur votre pathologie"
 icon={Description}
 iconColor="success"
 vertical={true}
 />
 </Link>
 </GridItem>
 *
 *
 * */
