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
    url_localisation
} from "../../../index";
import {grayColor} from "../../../assets/jss/material-kit-pro-react";


const myStyle = {
    myParagraph: {
        color: grayColor[0],
        textAlign: "justify"
    }}

const useStyles = makeStyles({...teamsStyle, ...descriptionStyle,...myStyle});

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
                    <h2 className={classes.title}>Informations</h2>
                    <h5 className={classes.myParagraph}>
                        Une consultation de cardiologie foetale, pédiatrique et congénitale adulte est assurée au cabinet du <strong>Docteur Radojevic Liegeois</strong> situé dans <strong>la maison médicale des deux Rives, au 2 rue François Epailly</strong> (en face de la clinique Rhéna):
                        <ul>
                            <li>le lundi de 08h30 à 18h00</li>
                            <li>mercredi de 08h30 à 13h00</li>
                            <li>jeudi de 08h30 à 16h00</li>
                            <li>vendredi de 08h30 à 18h00</li>
                        </ul>

                        Le rendez-vous peut être pris par téléphone au <strong>03.88.34.23.23</strong>.
                    </h5>

                    <h5 className={classes.myParagraph}>
                        <stong>Les consultations, avec échographie cardiaque et électrocardiogramme</stong>, sont assurées par le <strong>Docteur Radojevic Liegeois</strong> et les médecins consultants travaillant au centre de référence des cardiopathies congénitales complexes de l'hôpital Marie Lannelongue au Plessis-Robinson avec lequel notre centre a une étroite collaboration.
                    </h5>

                    <h5 className={classes.myParagraph}>
                        Les <strong>docteurs Jérôme Petit et Sébastien Hascoet</strong> de l'hôpital Marie Lannelongue assurent au sein du GERC de la clinique Rhéna, l'activité de <strong>cathétérisme cardiaque diagnostique</strong> (permettant de préciser le diagnostic de la cardiopathie congénitale et de mesurer les pressions dans le coeur et les artères ), <strong>et interventionnel</strong> (fermeture des communications inter-auriculaires, des canaux artériels perméables, dilatation des valves pulmonaires sténosées, etc... ).
                    </h5>

                    <h5 className={classes.myParagraph}>
                        <strong>L'imagerie médicale en coupe, l'IRM et le scanner cardiaque </strong>, complémentaire de l'échographie cardiaque dans le diagnostic des cardiopathies congénitales, est assurée au sein de la clinique Rhéna par <strong>les docteurs Gilles Goyault et Bernard Woerly</strong>.
                    </h5>
                    <h5 className={classes.myParagraph}>
                        <strong>Les tests d'effort</strong> sur le vélo ou le tapis ergométriques, mais également des échographies cardiaques d'effort pour les enfants et les adultes sont réalisés par le <strong>docteur Jelena Radojevic Liegeois et le docteur Paola Di Marco</strong> au sein de la clinique Rhéna. Ces examens nous renseignent sur la tolérance à l'effort des patients porteurs de cardiopathie congénitale, sur le rythme cardiaque, la tension artérielle, la fonction du muscle cardiaque, des valves, etc...
                    </h5>

                </GridItem>
            </GridContainer>

            <GridContainer>
            <GridItem md={6} sm={6}>
                <Link to={{
                    pathname: "/procedures",
                    search: "?active=2"
                }} className={classes.dropdownLink}>
                  <InfoArea
                    title="Information sur votre intervention - consentement"
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
