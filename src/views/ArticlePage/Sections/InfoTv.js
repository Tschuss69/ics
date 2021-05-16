import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/Consentement_TV.pdf"


import ArticleBase from "../ArticleBase";


export default function InfoTv() {
    return (
        <ArticleBase>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on une ablation par radiofréquence ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La tachycardie ventriculaire correspond à un trouble du rythme cardiaque grave pouvant conduire à un arrêt cardiaque. Elle est souvent associée à une maladie du cœur avec altération de la force du cœur pouvant survenir après un infarctus du myocarde ou sans cause retrouvée.
                            </div>

                            <div>
                                La technique d'ablation par radiofréquence introduite en cardiologique depuis la fin des années 80 consiste à utiliser les effets des courants de radiofréquence pour supprimer certaines tachycardies (accélérations du rythme cardiaque). Dans les indications habituelles, elle est efficace dans la majorité des cas.
                            </div>

                            <div>
                                Les courants de radiofréquence sont transmis vers l’intérieur des cavités cardiaque par l’intermédiaire d’un cathéter (câble électrique recouvert d’une gaine en plastique) et provoquent à son extrémité une brûlure de très petite taille (0.5 cm2) dans une zone préalablement repérée comme étant déterminante dans le déclenchement de votre trouble du rythme. Outre le cathéter destiné à transmettre le courant de radiofréquence, d’autres cathéters sont généralement utilisés afin de localiser très précisément la région cible.
                            </div>
                            <div>
                                Ces cathéters sont introduits sous anesthésie locale par ponction d’une artère ou d’une veine au niveau de l’aine et (ou) du cou. Ils sont placés à l’intérieur des cavités cardiaques sous contrôle télévisé.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation de l’exploration ablation par radiofréquence :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Durant cette intervention :
                            </div>

                            <ul>
                                <li>
                                    Il est nécessaire d’être à jeun, allongé sur une table d’examen radiologique située dans une salle spécialement équipée.
                                </li>
                                <li>
                                    Il est très souvent pratiqué une anesthésie générale, l’intervention pouvant se prolonger au-delà de 3 heures. L’examen est par conséquent non douloureux.
                                </li>
                            </ul>

                            <div>
                                Des épreuves de stimulation cardiaque sont souvent réalisées pour déclencher des crises de tachycardies ventriculaires pour mieux préciser leur localisation et orienter le traitement. En cas de tachycardies mal tolérées, il peut s'avérer nécessaire de réaliser 1 ou plusieurs chocs électriques externes.
                            </div>

                            <div>
                                Afin d’éviter un saignement local après la procédure, une compression est réalisée au niveau des points de ponction. S’il s’agit d’une artère, une compression appuyé, parfois douloureuse est nécessaire et un pansement compressif est laissé en place : il faut rester allongé en évitant de plier la jambe pendant plusieurs heures et sous surveillance électrocardiographique pendant 24 à 48 heures.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>L’ablation par radiofréquence comporte-t-elle des risques ?</h4></CardHeader>
                        <CardBody>
                            <h5>
                                1- Risques liés à l’ablation en général :
                            </h5>
                            <div>
                                Parmi les complications recensées par les enquêtes réalisées auprès de nombreux centres français, européens et nord-américaines, la plupart sont bénignes : hématome au point de ponction, douleurs thoraciques transitoires.
                            </div>
                            <div>
                                Mais certaines sont plus sévères et rares : lésions vasculaires pouvant nécessiter un traitement chirurgical local et/ou une transfusion sanguine, lésions d’une artère coronaire ou d’une valve cardiaque.
                            </div>
                            <h5>
                                2- Les risques plus spécifiques à l’ablation de la tachycardie ventriculaire :
                            </h5>
                            <div>

                                Le taux de complications global est estimé selon les études aux alentours de 5 à 10%. Le geste d'ablation de la tachycardie est effectué dans le ventricule gauche en général ou plus rarement le ventricule droit. Pour ce faire, une ponction trans-septale est le plus souvent nécessaire associé à un abord artériel fémoral. Cette ponction trans-septale, et ultérieurement la manipulation de la sonde d’ablation au niveau ventriculaire, peut être associée à un risque d’effractions péricardiques (saignements dans l’enveloppe qui entoure le cœur) ou thoraciques dans 2-3 % des cas. Ces épanchements sont parfois mal tolérés et doivent alors être évacués en urgence par une ponction péricardique, soit à l’aiguille, soit par voie chirurgicale sous-xiphoïdienne.
                            </div>
                            <div>
                                Le geste d'ablation de la tachycardie ventriculaire peut parfois nécessiter un abord péricardique (dans l'enveloppe qui entoure le cœur) où une attention particulière est prise concernant la présence des artères coronaires.
                            </div>
                            <div>
                                La procédure d'ablation est parallèlement effectuée sous anticoagulation, dont la surveillance de l’efficacité est effectuée périodiquement. Malgré les précautions ainsi établies, il existe un risque de caillots sanguins qui peuvent migrer dans la circulation et être responsables d’accidents ischémique cérébral ou vasculaire. Ce risque d’incident est évalué à 0.8 %.
                            </div>
                            <div>
                                D’autres complications ont été rapportées lors de cette ablation: lésions vasculaires (2%), choc cardiogénique ({"<"}1%), embolie pulmonaire ({"<"}1%).
                            </div>
                            <div>
                                Toutes les précautions sont prises avant, pendant et après l’intervention pour limiter au maximum ces risques.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels bénéfices peut-on attendre de l’ablation par radiofréquence ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La suppression par radiofréquence des zones de conduction qui sont à l’origine des tachycardies permet de prévenir ou réduire la récidive des troubles du rythme ventriculaire. Elle entraîne la disparition complète ou la réduction significative des symptômes fonctionnels et des complications.
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
