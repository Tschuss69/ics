import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";

import ArticleBase from "../ArticleBase";
import Danger from "../../../components/Typography/Danger";
import CustomTable from "../../../components/Table/Table";
import Quote from "../../../components/Typography/Quote";

import { FaFileDownload } from 'react-icons/fa';

import concentementFa from "../../../assets/pdf/infoConsentements/AblationFA.pdf"



export default function AblationFa() {

  return (

      <ArticleBase
          title={"Ablation de fibrillation atriale"}
      >
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>

                      <Card blog>
                          <CardHeader color="info"><h4>Telecharger fiche de concentement</h4></CardHeader>
                          <CardBody>
                             <a href={concentementFa} download> <FaFileDownload size={30} /> Telecharger fiche de concentement</a>
                          </CardBody>
                      </Card>



                      <Card blog>
                          <CardHeader color="info"><h4>Pourquoi vous propose-t-on une exploration ablation par radiofréquence ?</h4></CardHeader>
                          <CardBody >
                              <div>
                              L’objectif de cette intervention est de stopper ou tout du moins de ralentir l’évolution de la fibrillation atriale en évitant sa récidive.
                              </div>
                              <div>
                              Après avoir fait le bilan des anomalies électriques et anatomiques responsables de la fibrillation atriale, l’intervention consistera à neutraliser ces anomalies afin d’éviter la récidive de l’arythmie.
                              </div>
                              <div>
                                  Les <strong>taux de succès de l’intervention sont de l’ordre de 70 à 90% suivant le stade de fibrillation atriale</strong> que vous avez. Dans 10 à 30% des cas une séance supplémentaire est nécéssaire.
                              </div>
                          </CardBody>
                      </Card>

                      <Card blog>
                          <CardHeader color="info"><h4>Avant l'hospitalisation</h4></CardHeader>
                          <CardBody>

                                  <ul>
                                      <li>
                                          Nous vous indiquerons si des traitements sont à arrêter avant l’examen, notamment les anticoagulant (Xarelto, Eliquis, Pradaxa).
                                      </li>
                                      <li>
                                          Un scanner cardiaque et/ou une échographie cardiaque peuvent être demandé avant l’examen.
                                      </li>
                                      <li>
                                          Une consultation d’anesthésie sera probablement demandée.
                                      </li>
                                  </ul>
                                  <div>
                                      Nous essayerons dans la mesure du possible de combiner tous ces rendez-vous afin de vous faire gagner le plus de temps possible.
                                  </div>
                          </CardBody>
                      </Card>


                      <Card blog>
                          <CardHeader color="info"><h4>L'intervention</h4></CardHeader>
                          <CardBody>
                              <div>
                                  <h4>Avant l'intervention</h4>
                                  <ul>
                                      <li>
                                          Vous serez hospitalisé <strong>la veille ou le jour</strong> de l’intervention afin que l’on puisse faire les dernière vérifications.
                                      </li>
                                      <li>
                                          Une dépilation du corps (thorax, dos, aisselle et short) sera nécessaire afin de pouvoir coller les électrodes sur le thorax et le pansement compressif au niveau du pli de l’aine.
                                      </li>
                                      <li>
                                          Vous devrez être à jeun, c’est-à-dire de ne pas avoir mangé dans les 6 heures ou bu dans les 2 heures précédant le geste.
                                      </li>
                                  </ul>
                                  <div>
                                      <Danger>Attention</Danger> café au lait, jus de fruit avec pulpe et eau pétillante doivent être stoppés 6 heures avant.
                                  </div>
                              </div>

                              <div>
                                  <h4>L'intervention</h4>
                                  <ul>
                                      <li>
                                          Notre équipe vous accueillera dans la salle d’intervention. Nous vous placerons des électrodes sur le thorax et dans le dos afin que l’on puisse réaliser l’intervention.
                                      </li>
                                      <li>
                                          L’équipe d’anesthésie vous prendra alors en charge pour vous endormir. En effet, L’intervention est généralement réalisée sous <strong>anesthésie générale. Vous dormirez donc durant toute l’intervention.</strong>
                                      </li>

                                      <li>
                                          Nous introduirons ensuite de petits câbles (cathéters) par la veine fémorale droite qui nous amènera dans l’oreillette droite.
                                          Nous réaliserons une ponction dans le septum inter-atrial, nous permettant d’accéder à l’oreillette gauche.
                                          C’est à ce moment que l’on fera le bilan des anomalies anatomiques et électriques favorisant l’arythmie.
                                      </li>
                                      <li>
                                          Avec ces mêmes cathéters nous pourrons réaliser de petites brûlures permettant de supprimer les anomalies électriques et d’éviter la récidive de votre fibrillation atriale.
                                      </li>
                                      <li>
                                          L’intervention dure entre 1h30 et 3h suivant le stade de la fibrillation atriale et le nombre d’anomalies à traiter.
                                      </li>
                                  </ul>
                              </div>

                              <div>
                                  <h4>Après l'intervention</h4>
                                  <ul>
                                      <li>
                                          Une compression du point de ponction sera réalisée pour éviter l’hématome
                                      </li>
                                      <li>
                                          Une surveillance de 1 à 2 jours sera réalisée
                                      </li>
                                  </ul>
                              </div>

                          </CardBody>
                      </Card>



                      <Card blog>
                          <CardHeader color="info"><h4>Au retour au domicile</h4></CardHeader>
                          <CardBody>
                              <ul>
                                  <li>
                                      Vous pourrez reprendre vos activités quotidiennes des la sortie de la clinique.
                                  </li>
                                  <li>
                                      Le sport est cependant à suspendre pendant un mois le temps de la cicatrisation.
                                  </li>
                                  <li>
                                      Pendant 3 mois vous pourrez encore ressentir des tachycardies ou palpitation. Ceci est normal car l’inflammation locale engendrée par les brulures peuvent favoriser ces tachycardies. Ceci ne veut pas dire que l’intervention n’a pas reussie.
                                  </li>
                              </ul>
                          </CardBody>
                      </Card>

                      <Card blog>
                          <CardHeader color="info"><h4>Complications éventuelles</h4></CardHeader>
                          <CardBody>
                              <ul>
                                  <li>Les potentielles complications sont rares avec une équipe entrainée comme la notre (inférieur à 2%).</li>
                                  <li>
                                      Elles peuvent être un hématome au niveau de l’aine ou un épanchement autour du cœur le plus souvent régressifs. Très rarement Il faut ponctionner l’épanchement ou drainer l’hématome. Le reste des événements indésirables (cf les données de la dernière étude internationnales) restent rarissimes : accident cérébral, sténose des veines pulmonaire, paralysie diaphragmatique.
                                  </li>
                              </ul>

                              <br/>


                              <h3 style={{textAlign : "center"}}>Principales complication et le pourcentage de survenu dans l'une étude internationnale récente portant sur 1000 patients </h3>
                              <GridItem
                                  xs={12}
                              >
                                  <CustomTable
                                      tableHeaderColor="primary"
                                      tableHead={["Complications", "Fréquence"]}
                                      tableData={[
                                          ["Complication au point de ponction", "3,8%"],
                                          ["Tamponnade", "0,8%"],
                                          ["AVC", "<1/1000"],
                                          ["Douleur thoracique", "1%"],
                                          ["Lésion du nerf phrénique", "0,1%"],
                                          ["Sténose d'une veine pulmonaire", "0,1%"],
                                          ["Fistule oesophagienne", "<1/1000"]
                                      ]}
                                      coloredColls={[3]}
                                      colorsColls={["primary"]}
                                  />

                                  <Quote
                                      text={
                                          "The CABANA Randomized Clinical Trial Douglas L. at al. JAMA. 2019;321(13):1261-1274. doi:10.1001/jama.2019.0693"
                                      }/>

                              </GridItem>

                          </CardBody>
                      </Card>



                  </GridItem>
              </GridContainer>
      </ArticleBase>

  );
}
