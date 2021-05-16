import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementEto.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementEto() {
    return (
        <ArticleBase
            title={"ECHOGRAPHIE TRANS-OESOPHAGIENNE"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on une échographie transoesophagienne ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cet examen, spécialisé, explore le coeur, valves et cavités, selon les mêmes principes que lors d’une échographie transthoracique, à l’aide d’un capteur ultrasonore, similaire au sonar utilisé par les navigateurs. Cependant, ce capteur ultrasonore, de très petite taille, est placé sur un endoscope (habituellement utilisé pour visualiser votre œsophage ou votre estomac). Il s’agit en fait d’une voie privilégiée pour obtenir des images du coeur puisque l’oesophage (dans lequel la sonde est introduite) est accolé au coeur : les images sont de très bonne qualité, ce qui n’est pas toujours le cas en échographie transthoracique. Les ultrasons émis sont réfléchis par les structures cardiaques et analysés par l’appareil échographique, qui restitue des images des structures cardiaques en mouvement. L’échographie transthoracique précède toujours la réalisation d’une échographie transoesophagienne : les deux examens donnent des renseignements complémentaires.
                            </div>
                            <br/>
                            <div>
                                L’échographie transoesophagienne permet l’étude du coeur et de l’aorte, et surtout des petites structures cardiaques qui sont parfois inaccessibles non seulement à l’échographie transthoracique mais aussi à d’autres méthodes d’imagerie radiologique (scanner par exemple).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Circonstances habituelles dans lesquelles l’examen est indiqué</h4></CardHeader>
                        <CardBody>
                            <div>
                                La recherche d’un caillot intracardiaque est une indication importante, surtout lorsque le cœur est irrégulier (en fibrillation ou en arythmie). La recherche d’une anomalie de continence des valves cardiaques ou d’une anomalie du fonctionnement d’une prothèse cardiaque constitue une indication fréquente. L’aorte thoracique, gros vaisseau partant du cœur, et amenant le sang à l’ensemble des organes est également explorée dans ses différents segments, à la recherche d’une anomalie de la paroi (caillot, déchirure...).
                            </div>
                            <br/>
                            <div>
                                D’autres indications de l’examen peuvent aussi justifier la réalisation d’une échographie transoesophagienne. Il vous suffit de demander cette information au médecin qui a prescrit l’examen.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation de l’échographie transoesophagienne</h4></CardHeader>
                        <CardBody>
                            <h5>La préparation</h5>
                            <div>
                                Abstention de toute prise de nourriture ou de boisson dans les 6 heures précédant l’examen. Les médicaments seront normalement pris avec une petite quantité d’eau, si possible à distance de l’examen. Dans la majorité des cas, vous vous rendrez au laboratoire d’échographie pour la réalisation de cet examen. Dans certains cas, vous y serez accompagné en chaise ou en lit. Une perfusion peut être mise en place dans une veine du bras afin d’injecter un médicament pour vous relaxer, dans le cas où vous seriez hospitalisé, ou afin d’injecter du sérum physiologique pour rechercher un trajet inhabituel du sang à l’intérieur du coeur. Dans ces conditions, le médecin vous expliquera très précisément à quel moment l’injection sera réalisée, afin que celle-ci puisse être effectuée dans de bonnes conditions de tolérance et d’interprétation.
                            </div>
                            <br/>
                            <h5>Le lieu de l’examen</h5>
                            <div>
                                Dans le laboratoire d’échocardiographie, c’est-à-dire dans une salle d’échocardiographie, mais équipée d’un dispositif d’aspiration, d’oxygénation et à proximité d’un chariot qui contient l’ensemble des médicaments indispensables à l’urgence.
                            </div>
                            <br/>
                            <h5>La durée de l’examen</h5>
                            <div>
                                L’examen dure 10 à 15 minutes, sauf cas particulier. Cependant, la réalisation préalable d’une échographie transthoracique, la mise en place éventuelle d’une perf u s i o n allongent la durée de l’examen qui dure en totalité environ 1 heure. Mais dans la majorité des cas, la sonde n’est pas laissée plus de 10 minutes dans le tube digestif.
                            </div>
                            <br/>

                            <h5>Les modalités de l’examen</h5>
                            <div>
                                À votre arrivée, quelques questions vous seront posées afin de vérifier l’absence de contre- indication à cet examen : absence d’irradiation sur le thorax, absence connue de maladie de l’oesophage. Un spray d’anesthésique est pulvérisé dans votre arrière-gorge afin d’insensibiliser cette région, et de rendre le passage de la sonde indolore. Il vous sera demandé d’ôter vos prothèses dentaires amovibles et vos lunettes, afin d’éviter tout dommage. Votre position habituelle lors de l’introduction de la sonde est couchée sur le côté gauche ; une pièce de bouche, en plastique, appelée cale-dent est mise en place avant l’introduction de la sonde. Il est normal que pendant l’examen, des nausées surviennent ; il faut laisser couler la salive sans essayer de la retenir, essayer de ne pas parler car la sonde vous en empêche, et respirer régulièrement. À la fin de l’examen, la sonde est ôtée progressivement. Il est important de rester calme pendant la durée de l’examen afin d’éviter tout traumatisme.
                            </div>

                            <br/>
                            <h5>Après l’examen</h5>
                            <div>
                                Des douleurs de l’arrière-gorge, ressemblant à une angine peuvent survenir pendant quelques heures (surtout si vous n’avez pas laissé couler la salive). Il faut rester à jeun dans l’heure qui suit la réalisation de l’examen, car l’anesthésique local qui a été pulvérisé a endormi votre arrière- gorge et vous risquez, dans le cas d’une prise alimentaire ou liquide, de faire une fausse route, c’est-à-dire d’avaler non pas dans votre œsophage mais dans la trachée. Dans le cas où vous avez bénéficié d’une prémédication par voie intraveineuse, c’est-à-dire uniquement si vous êtes hospitalisé, vous serez surveillé pendant quelques heures par l’infirmière de la salle, qui vous donnera quelques informations à ce sujet. N’hésitez pas à poser des questions dès votre arrivée au laboratoire d’échocardiographie à l’infirmière qui vous accueillera ou au médecin.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>L’échographie transoesophagienne comporte-t-elle des risques ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Des incidents bénins sont possibles tels que troubles digestifs, palpitations... Les complications graves sont extrêmement rares (perforation digestive 0,02 à 0,03 %, en général chez les patients ayant des maladies de l’oesophage ; décès dans moins de 0,01 % des cas).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels bénéfices peut-on attendre de l’échographie transoesophagienne ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les renseignements obtenus vont permettre de confirmer ou d’éliminer un diagnostic qui était suspecté (infection de valve, caillot, problème à l’aorte...), d’évaluer la sévérité d’une atteinte des valves (valve «d’origine» ou prothèse), de guider certaines décisions d’interventions.
                            </div>
                        </CardBody>
                    </Card>


                </GridItem>
            </GridContainer>

            <GridContainer >
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <a href={concentement} download>
                        <Button color="primary" size="lg">
                            Telecharger le concentement
                        </Button>
                    </a>

                </GridItem>
            </GridContainer>

        </ArticleBase>
    );
}
