import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementEmbolisationVaricocele.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementEmbolisationVaricocele() {
    return (
        <ArticleBase
            title={"EMBOLISATION de VARICOCELE"}
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
                                En matière d’irradiation des patients, aucun risque n’a pu être démontré chez les patients compte tenu des faibles doses utilisées et des précautions prises pour limiter au strict minimum la zone examinée.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La varicocèle ou varice du testicule est secondaire au reflux de sang dans la veine testiculaire (grande veine ramenant le sang du testicule vers le cœur).
                            </div>
                            <br/>
                            <div>
                                Afin d’empêcher ce reflux de sang dans le testicule, la partie de cette veine située dans l’abdomen est bouchée (embolisée) à l’aide de colle médicale.
                            </div>
                            <br/>
                            <div>
                                Ce traitement de la varicocèle par voie veineuse permet, sans anesthésie générale et sans arrêt de travail, de mettre fin à ses conséquences douloureuses ou à ses conséquences sur la fertilité (dans 50 à 70% des cas).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’intervention est réalisée en ambulatoire, c'est à dire au cours d'une hospitalisation d'une journée.
                                Une sédation légère vous sera administrée par le médecin anesthésiste pour vous détendre.
                                Vous devrez prendre vos médicaments habituels et les consignes sur le jeûne vous seront communiquées. La ponction se fait, après anesthésie locale, au niveau de l'aine ou du coude. Par ce point de ponction, on chemine par la veine cave inférieure, la veine rénale et l'on descend dans la veine alimentant la varicocèle (veine gonadique ou testiculaire).
                            </div>
                            <br/>
                            <div>
                                Un tout fin cathéter est avancé dans la veine jusqu’à hauteur de la hanche et de la colle est injectée pour obturer cette veine malade.
                                Le geste est habituellement indolore.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Durée de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L'examen dure environ 45 mn à 1 h ; plus longtemps, si la varicocèle est bilatérale.
                                Après l’examen, vous serez surveillé, allongé pendant 1h, en raison de la ponction veineuse au pli de l’aine.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques de ne pas faire l’embolisation ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vos médecins ont jugé utile cette intervention. L’abstention vous expose à une persistance ou une aggravation des symptômes.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelles sont les complications liées à ce geste ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                Sur un plan général, les risques sont dus à l’injection d’un produit iodé. L’injection peut entraîner une réaction d’intolérance ou d’allergie.
                                Les complications réellement graves sont rarissimes. Le risque de décès est exceptionnel (jamais reporté dans notre centre).
                                Au niveau du point de ponction, il peut se produire un hématome (ou bleu). En cas d’hématome, celui-ci se résorbera spontanément en quelques jours.
                                Le risque de migration de colle dans les poumons est faible (jamais observé dans notre centre) et est généralement sans conséquence.
                                Il n'est pas rare d'avoir quelques sensations de gêne le long du rachis et d'avoir quelques gargouillements intestinaux dus à des petites réactions abdominales. Ces deux manifestations peu gênantes se produisent dans l'après-midi et s'estompent le soir.
                                Rarement, une petite extension de la thrombose peut survenir entraînant un gonflement ou une douleur de la bourse. Dans ce cas, vous devez prendre immédiatement un traitement anti-inflammatoire qui va arrêter cette réaction au niveau de la bourse. Pour ce faire, nous vous remettrons une ordonnance (ne pas l'acheter à l'avance, mais immédiatement en cas de réaction anormale). Vous devez prendre ce traitement pendant 4 à 5 jours.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="info"><h4>Bénéfices et limites de l'examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les bénéfices sont rapides pour le problème de la douleur (varicocèle douloureuse).
                                Il faut 2 à 3 mois pour avoir un plein effet sur la restauration de la qualité du sperme. Cette restauration n'est pas constante ni toujours complète. Il en va de même après un traitement chirurgical.
                                En outre, la récidive (5 à 10% des cas) est moindre qu'après la chirurgie, en raison de l'occlusion des petites branches veineuses collatérales susceptibles d'alimenter la varicocèle.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un premier commentaire pourra vous être donné juste après l’examen. Le compte-rendu écrit sera disponible à votre sortie de la clinique.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Consultation préalable :</h5>
                            <div>
                                Le médecin radiologue va vous voir en consultation, il est très important de lui communiquer la liste des médicaments que vous prenez et lui signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
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
                                Eviter les efforts physiques importants ainsi que les rapports sexuels pendant la première semaine suivant l’intervention.
                                En cas de douleur ou de gonflement du pli de l’aine dans les jours suivant l’intervention, prenez le traitement anti-inflammatoire prescrit par le radiologue interventionnel.
                                En cas de gonflement ou de douleur <strong>de la bourse</strong>, de gêne persistante le long du rachis (au-delà de qq jours), il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant : <strong>03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end)</strong>.
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
