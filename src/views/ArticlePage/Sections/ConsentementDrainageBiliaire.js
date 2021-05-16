import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementDrainageBiliaire.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementDrainageBiliaire() {
    return (
        <ArticleBase
            title={"DRAINAGE BILIAIRE"}
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
                            <div>
                                Toutefois, pour les femmes enceintes, des précautions doivent être prises systématiquement : c’est pourquoi il est important de signaler si vous pouvez être dans ce cas.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>L’IRM et l’échographie n’utilisent pas de rayons X</h4></CardHeader>
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
                                Votre état de santé nécessite la réalisation d’une dérivation de la bile en raison d’un blocage de son évacuation dans le tube digestif
                            <br/>
                                Cette intervention consiste à placer un tube souple (drain) ou un stent (ressort métallique) au travers de la peau dans les voies biliaires du foie.
                            <br/>
                                Le positionnement du drain ou du stent sera guidé sous contrôle échographique et radioscopique. Cette intervention sera réalisée par un radiologue interventionnel.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le drainage sera effectué sous anesthésie locale et sédation.
                                <br/>
                                Une perfusion sera mise en place afin de vous administrer des calmants au cours de l’examen par un médecin anesthésiste.
                                <br/>
                                L’ouverture des voies biliaires à l’aide d’un ballon d’angioplastie peut s’avérer douloureux et nécessiter une sédation temporaire plus profonde.
                                <br/>
                                Avant que l’intervention commence, elle vous sera expliquée en détail par un membre de l’équipe de radiologie, en l’absence de consultation préalable (dans les cas urgents).
                                <br/>
                                Votre coopération est essentielle : elle contribuera à la rapidité du geste de ponction et diminuera les risques de douleur et de complication. Vous devez rester immobile pendant l'ensemble de la procédure et arrêter de respirer si le radiologue vous le demande.
                                <br/>
                                Le contrôle par des images permet de déterminer précisément le point d’entrée du drain et son trajet.
                                Il s’agit toujours d’un matériel à usage unique.
                                <br/>
                                Après une petite incision de la peau, un cathéter (fin tuyau) est placé dans les voies biliaires sous contrôle échographique.
                                <br/>
                                En fonction des cas, soit un drain (tuyau souple) sera mis en place en amont de l’obstacle pour dériver la bile vers l’extérieur du corps dans une poche de recueil, soit l’obstacle sera franchi et ouvert à l’aide d’un ballonnet pour permettre la mise en place du stent ou drain interne.
                                <br/>
                                La petite incision est recouverte d’un pansement en fin d’intervention.
                                <br/>
                                Si un drain externe est laissé en place, il sera fixé à l’aide de fils de suture et relié à une poche.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Que va-t-il se passer après la mise en place du drain ou du stent ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Dès le retour dans votre chambre, vous serez surveillé attentivement par des infirmières qui auront reçu les instructions nécessaires. On vous indiquera quand vous pourrez manger et combien de temps vous devrez rester allongé.
                                <br/>
                                Si le drain est laissé en place plusieurs jours, il sera rincé par les infirmières si nécessaire. Le radiologue interventionnel jugera également de la nécessité d’un contrôle radiologique. Il décidera du moment où le drain pourra être retiré, une fois la collection évacuée. Ce retrait peut être désagréable mais il est très rapide (quelques secondes).
                                <br/>
                                En l’absence de drain externe, il n’y aura pas de soin particulier à prévoir suite à l’intervention en dehors de la surveillance du point de ponction.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelles sont les complications liées à ce geste ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le drain peut se boucher ou sortir du foie.
                                <br/>
                                Si le drain occasionne une gêne, voire une douleur, vous devez en parler à l’équipe soignante mais en aucun cas y toucher. Il faudra alors le repositionner sous contrôle radiologique, si nécessaire sous anesthésie.
                                <br/>
                                Si vous constatez un débranchement de votre drain appelez le personnel soignant.
                                <br/>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                <br/>
                                Les complications graves sont exceptionnelles : la blessure d’un vaisseau du foie peut entraîner une hémorragie et nécessiter des transfusions de sang ou de dérivés sanguins, et exceptionnellement une intervention. Du sang dans la bile est fréquent après l’intervention et ne doit pas inquiéter si la bile s’éclaircit en quelques heures.
                                <br/>
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
                            <ol>
                                <li>La demande de votre médecin (ordonnance, lettre...).</li>
                                <li>Les résultats d'examens de sang antérieurs (spermogramme le cas échéant).</li>
                                <li>Le dossier radiologique en votre possession (échographie-doppler testiculaire...).</li>
                                <li>La liste écrite des médicaments que vous prenez.</li>
                            </ol>

                            <br/>
                            <h5>Après votre retour à domicile :</h5>
                            <div>
                                Vous ne devez pas conduire pendant les 24 premières heures, éviter les exercices physiques intenses dans les 48 heures suivantes et vous organiser pour, en cas de problème, pouvoir rejoindre rapidement l’établissement.
                                <br/>
                                En cas de douleur ou de migration du drain, il est important de contacter immédiatement votre médecin ou
                                notre équipe au n° de téléphone suivant : <strong>03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end).</strong>
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
