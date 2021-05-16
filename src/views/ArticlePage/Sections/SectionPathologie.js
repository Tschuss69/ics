import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import sectionInterestedStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";
import CardHeader from "../../../components/Card/CardHeader";

import ecgFa from "./../../../assets/img/pathologies/rythmologie/FA/fibrillation-atriale-1.png"



/**
 *
 * <Player
 playsInline
 poster="/assets/poster.png"
 src={FA}
 />
 */


const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionPathologie() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>


              <Card blog>
                  <CardHeader color="info"><h4>Qu’est-ce que la fibrillation atriale ?</h4></CardHeader>
                  <CardBody>
                      <div>La fibrillation atriale est une maladie des oreillettes cardiaque. Normalement, la contraction des oreillettes est sous la dépendance du nœud sinusal, métronome du cœur situé dans l’oreillette droite. A son signal, toutes les cellules des oreillettes s’activent (se contractent un même temps) permettant l’éjection du sang des oreillettes vers les ventricules. Lorsque les oreillettes sont en fibrillation, il existe de multiples circuits rapides et anarchiques (300 à 400 battements/min), la contraction n’est plus harmonieuse, le rythme transmis au ventricule est irrégulier et rapide (tachycardie).</div>
                  </CardBody>
              </Card>

              <Card blog>
                      <CardHeader color="info"><h4>Fréquence de la fibrillation atriale ?</h4></CardHeader>
                  <CardBody>
                      <div>Trouble du rythme cardiaque le plus fréquent, la fibrillation atriale (communément appelée arythmie) touche environ 33 millions de personnes dans le monde. Chaque année, plus de 5 millions de personnes développent cette pathologie. En France 1 à 2 % de la population est touchée.</div>
                  </CardBody>
              </Card>

              <Card blog>
                  <CardHeader color="info"><h4>Quels sont les causes de cette arythmie ?</h4></CardHeader>
                  <CardBody>
                      <div>On distingue des facteurs favorisants non modifiables, c’est-à-dire sur lesquels nous ne pouvons agir, des facteurs favorisants modifiables pour lesquels une prise en charge adaptée est nécessaire.

                          Facteurs favorisant non modifiables : âge > 60 ans et antécédents familiaux de fibrillation atriale.

                          Facteurs favorisants modifiables : hypertension artérielle, insuffisance cardiaque, valvulopathie, coronaropathie, syndrome d’apnée du sommeil, obésité, diabète, hyperthyroïdie, embolie pulmonaire, insuffisance rénale chronique, sédentarité, exercice physique intensif, consommation d’alcool/drogue et tabagisme.
                      </div>
                  </CardBody>
              </Card>

              <Card blog>
                  <CardHeader color="info"><h4>Quels en sont les symptômes ?</h4></CardHeader>
                  <CardBody>
                      <div>
                          Les symptômes peuvent être très variables d’un patient à l’autre selon la fréquence cardiaque, l’ancienneté de la fibrillation atriale, l’existence de pathologie cardiaque sous-jacente ou la perception même du patient de ses symptômes.
                          Cependant, un certain nombre de symptômes sont plus fréquemment ressentis parmi les suivants : palpitation, fatigue, essoufflement, vertige et plus rarement douleur thoracique, syncope (perte de connaissance).
                      </div>
                  </CardBody>
              </Card>

              <Card blog>
                  <CardHeader color="info"><h4>Comment faire le diagnostique ? </h4></CardHeader>
                  <CardBody>
                      <div>Son diagnostic nécessite un enregistrement du rythme cardiaque, le plus souvent par un électrocardiogramme en consultation. Plus rarement, le diagnostic peut être fait sur un enregistrement longue durée du rythme cardiaque (holter), lors d’un contrôle de pace-maker/défibrillateur ou bien même à l’aide d’une montre connectée.</div>
                      <br/>
                      <img
                          src={ecgFa}
                          alt={"ECG_FA"}
                      />
                  </CardBody>
              </Card>

          </GridItem>
      </GridContainer>
    </div>
  );
}
