import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementRadiofrequence.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementRadiofrequence() {
    return (
        <ArticleBase
            title={"Radiofréquence d’une lésion abdominale"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Introduction</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre médecin vous a proposé ce traitement nécessitant un repérage par échographie, scanner ou IRM de la lésion hépatique/rénale à détruire et réalisée par un radiologue interventionnel. Il sera pratiqué avec votre consentement car vous avez la liberté de l’accepter ou de le refuser. Une information vous est ici fournie sur le déroulement de la procédure et de ses suites.
                            </div>
                            <br/>
                            <div>
                                L’équipe médicale (radiologue, médecin spécialiste, chirurgien, cancérologue et anesthésiste) est qualifiée pour juger de l’utilité de ce traitement. Toutefois, il se peut qu’il reste insuffisant. Sachez qu’il ne contre- indique pas l’utilisation d'autres traitements complémentaires et qu'il peut être répété.
                            </div>
                            <br/>
                            <div>
                                Il est très important que vous répondiez bien aux questions qui vous seront éventuellement posées sur votre état de santé ainsi que sur les médicaments que vous prenez (liste écrite des médicaments) et les dispositifs implantables que vous avez (pace-maker, prothèse métallique, clips chirurgicaux). Certains traitements doivent en effet être modifiés ou interrompus dans votre cas.
                            </div>
                            <br/>
                            <div>
                                N’oubliez pas de vous munir de vos anciens examens pour une comparaison et surtout de respecter les recommandations qui vous sont faites.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>La radiographie et le scanner utilisent des rayons X :</h4></CardHeader>
                        <CardBody>
                            <div>
                                En matière d’irradiation des patients, aucun risque n’a pu être démontré chez les patients compte tenu des faibles doses utilisées et des précautions prises pour limiter au strict minimum la zone examinée.
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
                                L’ablation par radiofréquence (RFA)/micro-ondes (MW) est une technique qui consiste à faire passer du courant électrique à travers une lésion/tumeur. Ce courant entraîne une friction des cellules entre elles ce qui provoque une élévation de la température, elle-même entraînant une coagulation et la mort des cellules sur le lieu du traitement, donc une destruction du tissu malade.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Est-ce une procédure expérimentale ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                <strong>Non, pas du tout.</strong> La destruction de tissus mous par réaction thermique est une méthode reconnue et utilisée depuis de nombreuses années. Son utilisation dans l’abdomen, le poumon et les os est une technique validée.
                            </div>
                            <br/>
                            <div>
                                L’utilisation d’un générateur de radiofréquence/micro-ondes et d’aiguilles appropriées permet aux médecins de traiter des patients atteints de cancer en utilisant cette source d’énergie. La radiofréquence est une intervention bien tolérée, à laquelle peu de complications sont associées.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment procède-t-on ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                En utilisant le plus souvent l'échographie et quelque fois le scanner ou l’IRM pour se guider, une aiguille (ou électrode) est positionnée dans la tumeur. L’aiguille est alors connectée à un générateur, qui fournit un courant électrique diffusé dans les tissus. Au fur et à mesure que les cellules chauffent, elles sont détruites.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Combien de temps dure la procédure ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La durée de la procédure dépend de plusieurs facteurs incluant le nombre, la taille et la localisation des lésions. Vous serez conduit dans une salle d’intervention et vous serez pris en charge par une équipe spécialisée, dotée de moyens de contrôle et de suivi adaptés. La technique nécessite un abord percutané en réalisant un petit trou dans la peau.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Serai-je conscient lors de l’intervention ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La nécessité d’une anesthésie générale, de l’administration de sédatifs ou d’anti-douleurs est liée étroitement au siège anatomique de la lésion à traiter et de la technique utilisée. Votre médecin abordera cette question avec vous.
                            </div>
                            <br/>
                            <div>
                                Une voie intraveineuse, à travers laquelle vous seront administrés les médicaments nécessaires, sera installée. Soyez assuré que tous les efforts seront entrepris pour que vous sentiez le moins de désagréments possibles durant l’intervention et dans les suites.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Combien de temps devrais-je rester hospitalisé ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cela dépend du type d’intervention que vous subirez. Votre durée d’hospitalisation peut être de 24h ou plus dans certains cas. Parlez-en avec votre médecin.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment se déroule l’examen ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Avant le traitement, vous aurez rencontré en consultation le radiologue interventionnel effectuant l’opération et l’anesthésiste. Parmi les procédures obligatoires, la préparation du champ opératoire sera réalisée avec éventuellement rasage d’une partie de votre abdomen, ainsi que de vos cuisses (face antérieure, latérale ou postérieure selon le positionnement) et application d’un antiseptique sur l'abdomen préparé.
                            </div>
                            <br/>
                            <div>
                                Le jour du traitement, vous serez accueilli(e) par l’équipe de radiologie interventionnelle dans le service d’hospitalisation. Le positionnement de l’aiguille, et le traitement appliqué à la lésion est en général indolore car il s’effectue sous anesthésie générale.
                                <ol>
                                    <li>le repérage de la lésion s’effectue grâce à l'échographie ou au scanner,</li>
                                    <li>après positionnement de l’aiguille spécifique, le courant électrique sera distribué selon un
                                        protocole très précis appartenant au type du générateur utilisé.</li>
                                    <li>une seule aiguille est utilisée par patient, même si plusieurs lésions doivent être traitées. Toutes les
                                        mesures d’asepsie sont rigoureusement suivies.</li>
                                </ol>
                                Vous serez ensuite surveillé pendant quelques heures en salle de réveil avant de regagner votre chambre d’hospitalisation traditionnelle.
                            </div>
                            <br/>
                            <div>
                                La durée de la procédure est variable en fonction de la complexité de l'intervention, 1h à 1h30 en moyenne.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelles complications peuvent survenir pendant et après le traitement ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                            </div>
                            <br/>
                            <div>
                                Pendant ou après une ponction d’un organe intra abdominal une hémorragie peut survenir. Elle peut occasionner des douleurs ; exceptionnellement une intervention complémentaire est nécessaire pour l'arrêter. Une infection de la zone traitée bien que rare peut survenir.
                            </div>
                            <br/>
                            <div>
                                Une complication conduisant au décès est rarissime (jamais rapporté dans notre centre)
                            </div>
                            <br/>
                            <div>
                                Dans les premières heures suivant le traitement, votre contribution sera primordiale: prévenez-nous en cas de douleur persistante ou de signes anormaux tels fièvre, frissons, vertiges.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment s’effectue le suivi médical ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vous serez surveillé attentivement par le personnel soignant. On vous indiquera si vous devrez rester allongé et pendant combien de temps. La durée pendant laquelle vous devrez rester dans l'établissement dépendra de l’existence ou non d’effets secondaires.
                            </div>
                            <br/>
                            <div>
                                Après le retour à votre domicile, l’équipe médicale vous demandera de venir la voir régulièrement lors de visites programmées. Des examens d’imageries devront être réalisés dans notre établissement selon des protocoles spécifiques.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Apportez le jour de l’examen :</h5>
                            <div>
                                <ol>
                                    <li>La liste <strong>écrite</strong> des médicaments que vous prenez.</li>
                                    <li>Le dossier radiographique en votre possession (radiographies, échographies, scanners, IRM).</li>
                                    <li>Tous vos résultats d’analyses de sang.</li>
                                </ol>
                            </div>
                            <br/>

                            <h5>Pour l’examen :</h5>
                            <div>
                                Une fiche d’information vous est fournie séparément sur les consignes à respecter le jour de l’intervention.
                            </div>

                            <br/>
                            <h5>Après l’examen, après le retour dans votre lit :</h5>
                            <div>Vous serez surveillé pour vérifier en particulier qu'il n'existe pas de saignement à l'endroit de la ponction. Les membres de l'équipe médicale vous diront à quel moment vous pourrez boire et manger. Ils vous expliqueront pendant combien de temps vous devrez rester allongé.</div>
                            <br/>
                            <div>
                                Un scanner de contrôle sera réalisé pendant l’hospitalisation pour confirmer l’absence de complication.
                            </div>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>Vous devez vous reposer 24 heures.</div>
                            <br/>
                            <div>Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses dans les 48 à 72 heures suivant l’intervention.</div>
                            <br/>
                            <div>En cas de doute ou de problèmes, il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant : 03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end)</div>
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
