import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/Consentement_FOP.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementFermetureFop() {
    return (
        <ArticleBase
            title={"Fermeture de foramen perméable"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on une fermeture du FOP ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le foramen ovale est un passage dans la cloison séparant les deux oreillettes du cœur présent au stade de la vie embryonnaire et qui se ferme spontanément peu après la naissance. Il peut arriver que cette fermeture ne se fasse pas ou se ré-ouvre (on parle alors de foramen ovale « perméable ») et soit responsable de symptômes à l’âge adulte dont le plus grave est l’accident vasculaire cérébral, complication neurologique nécessitant la fermeture du FOP pour prévenir une récidive.
                            </div>

                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation du geste de fermeture :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vous serez à jeun quelques heures avant la procédure.
                            </div>
                            <br/>
                            <div>
                                La procédure consiste en l’implantation d’une prothèse comprenant 2 disques en grillage métallique reliés par un petit raccord et qui se positionnent de chaque côté de la cloison entre les 2 oreillettes pour la rendre étanche. Cette prothèse souple est implantée par cathétérisme cardiaque via une ponction de la veine fémorale.
                            </div>
                            <br/>
                            <div>
                                Ce geste est réalisé avec un guidage échographique (par voie Transthoracique ou transoesophagienne généralement), nécessitant une sous anesthésie générale ou une simple sédation.
                            </div>
                            <br/>
                            <div>
                                Dans plus de 80% des cas, la communication entre les 2 oreillettes disparaît complètement juste après l’implantation de la prothèse. Dans les autres cas, la fermeture sera effective dans les semaines suivantes.
                            </div>
                            <br/>
                            <div>
                                On vous demandera de rester allongé quelques heures après la procédure.
                            </div>
                            <br/>
                            <div>
                                Votre sortie aura lieu en général le lendemain de la procédure après un contrôle échographique transthoracique.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les bénéfices attendus ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Dans les études réalisées à large échelle, la fermeture du FOP associée à un traitement antiplaquettaire réduit d’environ 60% le risque de récidive d’accident vasculaire cérébral comparativement au traitement antiagrégant seul (aspirine à faible dose le plus souvent).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques encourus ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Malgré l’expérience des opérateurs et les importants progrès techniques portant sur les cathéters et les prothèses, il s’agit d’un geste invasif comportant des risques :
                                <ul>
                                    <li>complications allergiques le plus souvent liées à l’utilisation de produits d’anesthésie.</li>
                                    <li>complications vasculaires au niveau du point de ponction fémoral : la plus commune est un hématome qui se traduit par un aspect bleuté habituellement sans conséquence et disparaissant au bout de quelques jours. Rarement ( inf 1% des cas), une blessure vasculaire peut nécessiter une réparation chirurgicale ou une transfusion.</li>
                                    <li>complications cardiovasculaires pendant la période hospitalière : elles sont très rares ( inf 0.5% des cas) d’accident vasculaire cérébral, d’épanchement hémorragique autour du cœur ou de déplacement de la prothèse, pouvant nécessiter une intervention complémentaire, parfois chirurgicale.</li>
                                    <li>complications cardiaques après la sortie hospitalière : la complication la plus fréquente est la survenue de palpitations liées à un trouble du rythme (inf 5% des cas) : en général précoce (premières semaines) et transitoire, cette arythmie peut nécessiter un geste ou un traitement complémentaire si elle persiste. De manière beaucoup plus rare (inf 0.5% des cas), la formation de caillots sur la prothèse ou un déplacement de la prothèse peuvent survenir.</li>
                                    <li>complications conduisant à un décès : elles sont très exceptionnelles (inf 0.1%).</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quel suivi après l’implantation de la prothèse ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’implantation de la prothèse rend nécessaire la prise d’un traitement antiagrégant plaquettaire pendant une durée minimale de 6 mois et qui est généralement poursuivi à plus faible dose au long cours.
                            </div>
                            <br/>
                            <div>
                                Aucune précaution particulière d’ordre physique ou professionnelle n’est nécessaire après l’implantation de la prothèse. Cette prothèse ne contre-indique également aucune exploration ou intervention future.
                            </div>
                            <br/>
                            <div>
                                Une prophylaxie antibactérienne sera proposée en cas de gestes extracardiaques à risque lors des 6 mois suivant l’implantation de la prothèse.
                            </div>
                            <br/>
                            <div>
                                Un suivi échographique sera proposé jusqu’à 12 mois pour s’assurer de l’absence de communication résiduelle significative entre les 2 oreillettes.
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
