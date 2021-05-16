import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

// @material-ui icons
import { FaHeartbeat, FaChild } from 'react-icons/fa';
import {GiHeartOrgan} from 'react-icons/gi'
import {AiFillTrademarkCircle, AiFillCamera} from 'react-icons/ai'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import {Link} from "react-router-dom";
import {url_congenital, url_coronarographie, url_echographie, url_radiologie, url_rythmologie} from "../../../index";

const useStyles = makeStyles(descriptionStyle);

export default function SectionSpecialite() {
  const classes = useStyles();
  return (
   <span>
        <div className={classes.features} >

                 <GridContainer justify="center">
                     <GridItem md={8} sm={8}>
                            <h2 className={classes.title}>
                                Nos pôles d'expertise
                            </h2>
                          <h5>Notre équipe est constitue de cardiologues, et de radiologues. Chacun d'entre nous est sur-spécialisé dans un domaine précis ce qui nous permet de vous apporter notre expertise pour vos pathologies. Vous trouverez dans chaque section des informations sur les différentes interventions et les médecins sur-spécialisé dans le domaine.</h5>
                     </GridItem>
                 </GridContainer>

                  <GridContainer justify="center">
                    <GridItem md={4} sm={4}>
                        <Link to={url_rythmologie}>
                          <InfoArea
                            title="Rythmologie"
                            description="Spécialité traitant les tachycardies et les ralentissements pathologiques du coeur (ablations de fibrillation atriale, tachycardie ventriculaire, flutter, bouveret, pace maker, défibrillateur...)"
                            icon={FaHeartbeat}
                            iconColor="danger"
                            vertical={true}
                          />
                        </Link>
                    </GridItem>
                    <GridItem md={4} sm={4}>
                        <Link to={url_radiologie}>
                          <InfoArea
                            title="Radiologie interventionnelle"
                            description="Pathologies pouvant être traitées par des intervention guidée par des techniques d'imagerie médicale."
                            icon={AiFillTrademarkCircle}
                            iconColor="primary"
                            vertical={true}
                          />
                        </Link>
                    </GridItem>
                      <GridItem md={4} sm={4}>
                          <Link to={url_coronarographie}>
                              <InfoArea
                                  title="Cardiologie interventionnelle - Coronarographie"
                                  description="4 cardiologues coronarographistes dont la spécialité est de traiter les sténoses (artères pincées) des coronaires, mais aussi de fermer des FOP et CIA et de remplacer les valves aortiques par voie artérielle."
                                  icon={GiHeartOrgan}
                                  iconColor="danger"
                                  vertical={true}
                              />
                          </Link>
                      </GridItem>
                  </GridContainer>
                <GridContainer justify="center">
                    <GridItem md={4} sm={4}>
                        <Link to={url_congenital}>
                          <InfoArea
                            title="Cardiologie pédiatrique et congénitale de l’adulte"
                            description="Spécialité soignant des enfants et des adultes atteints de de malformations cardiaques"
                            icon={FaChild}
                            iconColor="info"
                            vertical={true}
                          />
                        </Link>
                    </GridItem>

                      <GridItem md={4} sm={4}>
                          <Link to={url_echographie}>
                              <InfoArea
                                  title="Imagerie cardiaque"
                                  description="3 cardiologues et 2 radiologues spécialisés dans l'imagerie cardiaque (échographie d'effort, echographie trans-oesophagienne, IRM, Scanner cardiaque)"
                                  icon={AiFillCamera}
                                  iconColor="warning"
                                  vertical={true}
                              />
                          </Link>
                      </GridItem>
             </GridContainer>
        </div>
   </span>
  );
}
