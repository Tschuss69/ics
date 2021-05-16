import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementAngiographie.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementAngiographie() {
    return (
        <ArticleBase
            title={"ANGIOGRAPHIE"}
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
                                <br/>
                                Toutefois, pour les femmes enceintes, des précautions doivent être prises systématiquement : c’est pourquoi il est important de signaler si vous pouvez être dans ce cas.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                L'angiographie est un examen qui consiste à visualiser les vaisseaux (artère ou veine) d'une partie de votre corps.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Le déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L'examen sera réalisé sous anesthésie locale. Il faut ensuite "faire une piqûre" (ponction) au niveau de l'artère ou de la veine utilisée (pli de l'aine, pli du coude, poignet...), afin d'introduire dans le vaisseau un petit tuyau en plastique appelé cathéter. Ce cathéter servira à injecter un liquide, que l'on appelle "produit de contraste iodé", qui permettra de voir les vaisseaux.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques encourus ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Avec les techniques modernes, l'angiographie est un examen sûr. Cependant, ces angiographies peuvent parfois entraîner des complications qui restent cependant rares.
                            <br/>
                                Localement, au niveau du point de ponction, il peut se produire un hématome (un bleu) qui se résorbera en quelques jours. Tout à fait exceptionnellement, des lésions de l'artère ou de la veine peuvent nécessiter un traitement complémentaire, pour lequel le radiologue interventionnel réalisant l’intervention est compétent.
                            <br/>
                                Sur un plan général, les risques sont dus à l'injection du produit de contraste iodé. L’injection peut entraîner une réaction d’intolérance ou d’allergie. Les complications réellement graves sont rarissimes. Le risque de décès est de moins d’1 cas sur 100 000 (jamais rapporté dans notre centre).
                            <br/>
                                Des accidents rénaux, également liés au produit iodé, sont notamment possibles chez certains sujets atteints de maladies fragilisant le rein (insuffisance rénale chronique, diabète, myélome, etc.).
                                <br/>
                                Des modalités particulières seront observées pour les patients qui ont présenté de graves manifestations allergiques et pour ceux qui ont une fragilisation rénale. Ces patients doivent se signaler au moment de la consultation et lors de la prise du rendez-vous. L’injection de gaz carbonique CO2 pourra alors être réalisée pour éviter ces risques allergique ou de dégradation de la fonction du rein.
                                <br/>
                                De plus, les diabétiques prenant des biguanides (Glucinan®, Glucophage®, Stagid®) doivent également le signaler car ce traitement doit être interrompu durant quelques jours.
                                <br/>
                                Les risques thrombo-emboliques : ces accidents sont très rares et tout est fait pour les éviter ; lorsqu'ils surviennent, un traitement d'urgence est le plus souvent indiqué.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Conditions de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                En fonction de votre état, l'angiographie pourra être réalisée en ambulatoire (c'est à dire que vous retournerez chez vous quelques heures après l'examen), ou à l'occasion d'une brève hospitalisation, dont la durée vous sera précisée par le médecin radiologue interventionnel.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un premier commentaire pourra vous être donné juste après l’examen. Il ne s’agira là que d’une première approche, car les images doivent être ensuite analysées par le médecin radiologue. Le compte-rendu écrit sera disponible dans les meilleurs délais, et la plupart du temps à votre sortie de la clinique.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il est très important de communiquer au plus tôt la liste des médicaments que vous prenez et signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>
                            <br/>

                            <h5>Apportez le jour de l’examen :</h5>
                            <ol>
                                <li>La liste écrite des médicaments que vous prenez.</li>
                                <li>Le dossier radiographique en votre possession (radiographies, échographies, scanners, IRM).</li>
                                <li>Tous vos résultats d’analyses de sang.</li>
                            </ol>


                            <h5>Pour l’examen :</h5>
                            <div>Une fiche d’information vous est fournie séparément sur les consignes à respecter le jour de l’intervention.</div>


                            <h5>Après l’examen, après le retour dans votre lit :</h5>
                            <div>
                                Vous serez surveillé pour vérifier en particulier qu'il n'existe pas de saignement à l'endroit de la ponction. Les membres de l'équipe médicale vous diront à quel moment vous pourrez boire et manger. Ils vous expliqueront pendant combien de temps vous devrez rester allongé.
                                <br/>
                                Afin d'éviter le risque d'hématome à l'endroit de la ponction artérielle, en général au pli de l’aine, il vous est demandé de rester allongé pendant plusieurs heures sans plier la cuisse du côté où la piqûre a été faite. Si l'examen est réalisé en "ambulatoire", c'est après une période d'observation de quelques heures que vous pourrez retourner chez vous, accompagné, en possession de la fiche de consignes.
                                <br/>
                                Vous ne devez pas conduire vous-même votre voiture au retour, ni prendre seul les transports en commun.
                            </div>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>
                                Vous devez vous reposer 24 heures.
                                <br/>
                                Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses dans les 48 heures suivant l’angioplastie.
                                <br/>
                                Il vous est recommandé d’arrêter définitivement toute intoxication tabagique le cas échéant.
                            </div>

                            <br/>
                            <div>
                                En cas de question ou de problèmes avant ou après l’intervention, et en particulier dans les cas suivants :
                                <ol>
                                    <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez- vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                    <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction de l'artère.</li>
                                    <li>Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un changement de couleur du bras ou de la jambe concernée par la ponction artérielle.</li>
                                    <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                    <li>Si vous avez de la fièvre ou des frissons dans les jours qui suivent l’intervention,
                                        il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant :
                                        <strong>03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end)</strong></li>
                                </ol>
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
