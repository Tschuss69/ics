import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementNephrostomie.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementNephrostomie() {
    return (
        <ArticleBase
            title={"POSE DE NEPHROSTOMIE +/- SONDE JJ"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Introduction</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre médecin vous a proposé une intervention radiologique. Elle sera pratiquée avec votre consentement. Vous avez en effet la liberté de l’accepter ou de le refuser. Une information vous est fournie sur le déroulement de l’intervention et de ses suites. Il est très important que vous répondiez bien aux questions qui vous seront éventuellement posées sur votre état de santé ainsi que sur les médicaments que vous prenez (liste écrite des médicaments). Certains traitements doivent en effet être modifiés ou interrompus pour certains examens d’imagerie.
                            </div>
                            <br/>
                            <div>
                                N’oubliez pas de vous munir de vos anciens examens pour une comparaison et surtout de respecter les recommandations qui vous sont faites.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>La radiographie utilise des rayons X</h4></CardHeader>
                        <CardBody>
                            <div>
                                En matière d’irradiation des patients, aucun risque n’a pu être démontré chez les patients compte tenu des faibles doses utilisées et des précautions prises pour limiter au strict minimum la zone examinée. A titre d’exemple, un cliché simple correspond en moyenne à l’exposition moyenne naturelle (soleil) subie lors d’un voyage de 4 heures en avion.
                            </div>
                            <br/>
                            <div>
                                Toutefois, pour les femmes enceintes, des précautions doivent être prises systématiquement : c’est pourquoi il est important de signaler si vous pouvez être dans ce cas.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="danger"><h4>REMARQUE : L’IRM et l’échographie n’utilisent pas de rayons X</h4></CardHeader>
                        <CardBody>
                            <div>
                                Ce sont des examens non irradiants qui utilisent soit les propriétés des champs magnétiques pour l’IRM, soit les propriétés des ultrasons pour l’échographie.
                                Pour les intensités utilisées par ces deux techniques, il n’a jamais été décrit de conséquence particulière pour l’homme.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre état de santé nécessite la réalisation d’une dérivation des urines en raison d’un blocage de l’évacuation de l’urine entre le rein et la vessie ou la paroi abdominale.
                            </div>
                            <br/>
                            <div>
                                Cette intervention consiste à placer un tube souple (drain) au travers de la peau dans les cavités du rein.
                                Le positionnement du drain sera guidé sous contrôle échographique et radioscopique. Cette intervention sera réalisée par un radiologue interventionnel.
                            </div>
                            <br/>
                            <div>
                                Parfois, le geste sera complété de la mise en place d’un drain interne (sonde JJ) reliant le rein à la vessie ou le rein à la paroi abdominale (en cas d’antécédent d’opération de vessie).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le drainage sera effectué sous anesthésie locale et sédation.
                            </div>
                            <br/>
                            <div>
                                Une perfusion sera mise en place afin de vous administrer des calmants au cours de l’examen par un médecin anesthésiste.
                            </div>
                            <br/>
                            <div>
                                Avant que l’intervention commence, elle vous sera expliquée en détail par un membre de l’équipe de radiologie, en l’absence de consultation préalable (dans les cas urgents).
                            </div>
                            <br/>
                            <div>
                                Votre coopération est essentielle : elle contribuera à la rapidité du geste de ponction et diminuera les risques de douleur et de complication. Vous devez rester immobile pendant l'ensemble de la procédure et arrêter de respirer si le radiologue vous le demande.
                            </div>
                            <br/>
                            <div>
                                Le contrôle par des images permet de déterminer précisément le point d’entrée du drain et son trajet.
                                Il s’agit toujours d’un matériel à usage unique.
                            </div>
                            <br/>
                            <div>
                                Après une petite incision de la peau, le positionnement du drain prend quelques minutes. Le geste est un peu désagréable mais l’anesthésie locale et la sédation le rendent supportable.
                            </div>
                            <br/>
                            <div>
                                La bonne position du drain est ensuite vérifiée par un contrôle radiologique.
                            </div>
                            <br/>
                            <div>
                                Le drain peut être retiré immédiatement après l’intervention lorsqu’une sonde JJ est descendue dans le même temps ou fixé à la peau par un ou plusieurs fils puis relié à une poche en plastique. La petite incision est recouverte d’un pansement en fin d’intervention.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Que va-t-il se passer après la mise en place du drain ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Dès le retour dans votre chambre, vous serez surveillé attentivement par des infirmières qui auront reçu les instructions nécessaires. On vous indiquera quand vous pourrez manger et combien de temps vous devrez rester allongé.
                            </div>
                            <br/>
                            <div>
                                Si le drain est laissé en place plusieurs jours, il sera rincé par les infirmières si nécessaire. Le radiologue interventionnel jugera également de la nécessité d’un contrôle radiologique. Il décidera du moment où le drain pourra être retiré, une fois la collection évacuée. Ce retrait peut être désagréable mais il est très rapide (quelques secondes).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelles sont les complications liées à ce geste ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le drain peut se boucher ou sortir du rein.
                            </div>
                            <br/>
                            <div>
                                Si le drain occasionne une gêne, voire une douleur, vous devez en parler à l’équipe soignante mais en aucun cas y toucher. Il faudra alors le repositionner sous contrôle radiologique, si nécessaire sous anesthésie.
                            </div>
                            <br/>
                            <div>
                                Si vous constatez un débranchement de votre drain appelez le personnel soignant.
                            </div>
                            <br/>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                            </div>
                            <br/>
                            <div>
                                Les complications graves sont exceptionnelles : la blessure d’un vaisseau du rein peut entraîner une hémorragie et nécessiter des transfusions de sang ou de dérivés sanguins, et exceptionnellement une intervention. Du sang dans les urines est très fréquent après l’intervention et ne doit pas inquiéter si les urines s’éclaircissent en quelques heures.
                            </div>
                            <br/>
                            <div>
                                Une surinfection est possible.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Consultation préalable :</h5>
                            <div>
                                Le médecin radiologue va vous voir en consultation sauf si le geste est réalisé en urgence.
                                Il est très important de lui (ou à un membre de son équipe) communiquer la liste des médicaments que vous prenez et lui signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>
                            <br/>

                            <h5>Apportez le jour de l’examen :</h5>
                            <div>
                                <ol>
                                    <li>La demande de votre médecin (ordonnance, lettre...).</li>
                                    <li>Les résultats d'examens de sang antérieurs (spermogramme le cas échéant).</li>
                                    <li>Le dossier radiologique en votre possession (échographie-doppler testiculaire...).</li>
                                    <li>La liste écrite des médicaments que vous prenez.</li>
                                </ol>
                            </div>
                            <br/>

                            <h5>Après votre retour à domicile :</h5>
                            <div>
                                Vous ne devez pas conduire pendant les 24 premières heures, éviter les exercices physiques intenses dans les 48 heures suivantes et vous organiser pour, en cas de problème, pouvoir rejoindre rapidement l’établissement.
                            </div>

                            <br/>
                            <div>En cas de douleur ou de migration du drain, il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant : 03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end).</div>

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
