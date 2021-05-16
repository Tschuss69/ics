import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";

import ArticleBase from "../ArticleBase";



export default function ExplorationElectrophysiologique() {

  return (

      <ArticleBase
          title={"Exploration éléctrophysiologique"}
      >
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>

                      <Card blog>
                          <CardHeader color="info"><h4>Pourquoi vous propose-t-on une exploration électrophysiologique ?</h4></CardHeader>
                          <CardBody >
                              <ul>
                                  <li>
                                      L'exploration électrophysiologique consiste à étudier le mécanisme des anomalies électriques du rythme (accélération du rythme) ou de la conduction cardiaque (ralentissement du rythme).
                                      Lors de cette examen des cathéters sont introduits sous anesthésie locale par ponction d’une veine au niveau de l’aine.
                                      Ils sont placés à l’intérieur des cavités cardiaques sous contrôle radiologique (télévisé).

                                  </li>
                                  <li>
                                      Aucune ponction ou brulure n'est réalisée à l'interieur de votre coeur. Les sondes sont simplement posées à la surface interne de votre coeur. Ceci est <strong>indolore</strong>.
                                  </li>
                              </ul>
                          </CardBody>
                      </Card>

                      <Card blog>
                          <CardHeader color="info"><h4>Comment se déroule l'examen ?</h4></CardHeader>
                          <CardBody >
                              <div>
                                  <ul>
                                      <li>L'examen est réalisé sous anesthésie locale le plus souvent. Ce n'est pas un examen dououreux. </li>
                                      <li>Lors des stimulation cardiaque ou l'éventuelle injection d'isuprel (équivalent d'adrénaline), vous pourrez ressentir votre coeur qui battra fort et vite ce qui peut être désagréable.
                                          Cette sensation sera de courte durée.</li>
                                  </ul>
                              </div>
                          </CardBody>
                      </Card>

                      <Card blog>
                          <CardHeader color="info"><h4>Quels sont les risques de l'exploration electrophysiologique ?</h4></CardHeader>
                          <CardBody>
                              <div>
                                  Les compications sont faibles. Nous pouvons citer
                                  <ul>
                                      <li>
                                          Les hématomes au point de ponction (pli de l'aine droit le plus souvent). Ce risque est plus important si vous prenez des médicaments
                                          favorisant les saignements.
                                      </li>
                                      <li>
                                          Dans certains cas le déclenchement de tachycardie nécessitant une brève anesthésie afin de restaurer le rythme normal.
                                      </li>
                                  </ul>
                              </div>
                          </CardBody>
                      </Card>

                  </GridItem>
              </GridContainer>
      </ArticleBase>

  );
}
