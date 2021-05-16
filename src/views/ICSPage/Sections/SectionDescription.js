import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {FaHospitalSymbol} from 'react-icons/fa'
import {AiOutlineTeam} from 'react-icons/ai'

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import AirlineSeatFlatAngledIcon from "../../../../node_modules/@material-ui/icons/AirlineSeatFlatAngled";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <span>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
                Pôle spécialisé dans le diagnostic et le traitement des maladies cardiovasculaires pour l’adulte et l’enfant, l'ICS est composé d'une équipe de cardiologues, cardiopédiatres et radiologues interventionnels.
                <br/>
                <br/>
                Dôté de matériel de  dernière génération, l'équipe de l'ICS est spécialisé dans les interventions guidées par l'imagerie médicale permettant de traiter la majorité les pathologies cardio-vasculaires.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Quatre salles d'intervention"
                description="Avec du materiel de radiologie de dernière génération, les traitements sont réalisés avec toujours moins de dose de rayon X."
                icon={AirlineSeatFlatAngledIcon}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Des urgences et des soins intensifs ouverts 24h/24"
                description="L'ICS est situé au coeur de la clinique Rhéna. Dotée d'urgences, en cas de douleur thoracique ou d'infarctus, vous pourrez être pris en charge 24h/24h via les Urgences et si nécéssaire dans nos Soins intensifs de cardiologie (USIC)."
                icon={FaHospitalSymbol}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Trois équipes complémentaires"
                description="Avec 7 cardiologues, 1 cardiopédiatre à temps plein, 2 cardiopédiatres consultants pour l’activité de cathétérisme cardiaque congénital et 3 radiologues interventionnels nous pourrons prendre en charge toutes les pathologies cardio-vasculaires nécessitant les interventions quidées par l'imagerie"
                icon={AiOutlineTeam}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
    </span>
  );
}
