import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementEmbolisationUterine.pdf"


import ArticleBase from "../ArticleBase";
import embolisation_fibrome from "../../../assets/img/pathologies/radiologie/embolisation_fibrome.png";
import fibrome_embolisation from "../../../assets/img/pathologies/radiologie/fibrome_embolisation.png";
import {makeStyles} from "@material-ui/core/styles";


import shoppingCartStyle from "../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";



const useStyles = makeStyles(shoppingCartStyle);

export default function ConsentementEmbolisationUterine() {

    const classes = useStyles();



    return (
        <ArticleBase
            title={"EMBOLISATION DES ARTERES UTERINES"}
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
                                Cette technique vise à occlure par de petites particules (ou billes) les artères nourricières du fibrome (ou de l’adénomyose) ce qui a pour effet d’entraîner sa régression et la disparition des symptômes. Dans un premier temps est réalisée une angiographie des artères utérines, l’injection des particules se faisant dans ces vaisseaux dans un deuxième temps à l’aide d’un tout fin tuyau (cathéter).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Qu’est-ce qu’un fibrome utérin ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                C’est une tumeur bénigne de l’utérus composée de muscle qui grossit dans la paroi utérine. Les fibromes n’entraînent pas toujours de symptômes, mais dans certains cas, leur localisation et leur taille peuvent entraîner des problèmes à type de saignements excessifs pendant ou en dehors des règles, de douleurs, de pesanteur du bas ventre, d’augmentation du volume du ventre, de troubles urinaires ou rectaux.
                            </div>

                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelle est la fréquence de cette maladie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les fibromes utérins sont très fréquents : 20 à 40 % des femmes de plus de 35 ans ont un fibrome d’une taille significative.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment fait-on le diagnostic de fibrome ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                En général, le diagnostic de fibrome est fait à l’examen gynécologique et confirmé par une échographie abdominale. Il peut aussi être visualisé en scanner ou en examen par résonance magnétique (IRM ; examen nécessaire avant l’embolisation).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment peut-on traiter les fibromes ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La plupart des fibromes n’entraînent pas de symptômes et ne sont donc pas traités. Quand ils entraînent des symptômes, le traitement médical est souvent le premier traitement proposé, il peut comporter une prescription de pilule contraceptive progestative, une prescription d’anti-inflammatoires ou un traitement hormonal.
                            </div>
                            <br/>
                            <div>
                                Parfois, le traitement médical n’est pas satisfaisant (récidive des saignements) ou mal toléré. Les fibromes peuvent se remettre à grossir après l’arrêt du traitement et les symptômes réapparaitre.
                                Les différentes possibilités de traitement sont alors : l’embolisation utérine (radiologie interventionnelle), la myomectomie (chirurgie) et l’hystérectomie totale (chirurgie).
                            </div>
                            <br/>
                            <h5>L’embolisation utérine :</h5>
                            <div>
                                Il s’agit d’une intervention qui n’est pas chirurgicale, expliquée en détail plus loin dans cette fiche.
                            </div>
                            <h5>La myomectomie :</h5>
                            <div>
                                C’est la chirurgie qui enlève uniquement des fibromes et préserve l’utérus. La plupart du temps, la chirurgie entraîne un contrôle des symptômes, mais plus il y a de fibromes, plus la chirurgie est difficile et moins elle a de chances d’entraîner un succès clinique.
                            </div>
                            <h5>L’hystérectomie totale :</h5>
                            <div>
                                Elle est souvent proposée pour ce type de problèmes. Elle est réalisée sous anesthésie générale et nécessite 3 à 4 jours d’hospitalisation et 4 à 6 semaines de récupération. L’hystérectomie totale est réservée aux patientes qui ne désirent plus de grossesse et qui souhaite une solution radicale.
                                <br/>
                                Les complications de la chirurgie sont supérieures à celles de l’embolisation avec une convalescence plus longue.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="info"><h4>Le déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il s’agit d’une intervention « mini invasive » qui ne nécessite qu’une petite ponction au pli de l’aine ou au poignet, elle est réalisée sous anesthésie locale et sédation, par un radiologue interventionnel entraîné. Après avoir fait une anesthésie locale au pli de l’aine ou au poignet, il insère un petit cathéter (tuyau) dans l’artère après avoir fait un petit trou dans celle-ci (ponction artérielle). Le cathéter est guidé sous scopie jusqu’aux artères utérines et le radiologue y injecte de toutes petites particules sphériques, de la taille d’un grain de sable, qui vont occlure cette artère. En général, on réalise une embolisation des deux artères utérines (droite et gauche).
                            </div>
                            <div>
                                L’embolisation utérine nécessite une courte hospitalisation de 24h qui permet surtout de contrôler les douleurs qui sont à type de crampes et de sensation de pesanteur et parfois de fièvre. La récupération complète prend en général 1 semaine mais peut dans certains cas être un peu plus longue.
                            </div>


                            <img
                                src={embolisation_fibrome}
                                alt="schema d'embolisation artère utérine"
                                className={classes.imgCard}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="info"><h4>Quelles sont les chances de succès de ce traitement ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les études montrent que 80 à 90% des femmes qui ont ce type de traitement ont une amélioration significative ou totale de leurs symptômes avec disparition des saignements anormaux et des douleurs. Ce traitement est également efficace s’il y a de nombreux fibromes ou une adénomyose associée. L’effet sur la taille des fibromes est parfois moins significative.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques de l’embolisation utérine ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                <br/>
                                Cet examen peut présenter les risques de toute artériographie (risques locaux au niveau du point de ponction, risques généraux et risques thrombo-emboliques) et ceux en rapport avec l’embolisation utérine.
                            </div>


                                <h5>Risques de toute artériographie :</h5>
                                <div>
                                    <ul>
                                        <li>Localement, au niveau du point de ponction, il peut se produire un hématome (ou bleu) qui se résorbera en deux à trois semaines.</li>
                                        <li>Sur un plan général, les risques sont dus à l'injection du produit iodé utilisé pour le repérage artériel</li>
                                    </ul>
                                    L’injection peut entraîner une réaction d’intolérance ou d’allergie. Les complications réellement graves sont rarissimes ; le risque de décès est exceptionnel (jamais reporté dans notre centre).
                                    <br/>
                                    Des accidents rénaux, également liés au produit iodé, sont notamment possibles chez certains sujets atteints de maladies fragilisant le rein (insuffisance rénale chronique, diabète, myélome, etc.).
                                </div>

                                <h5>Les risques thrombo-emboliques :</h5>
                                <div>
                                    Au total, le risque de présenter un accident grave ou définitif peut être, en moyenne, évalué entre 0,5 et 1%, en fonction de votre état de santé initial et de la maladie qui justifie l'examen.
                                </div>

                                <h5>Risques liés à l’embolisation utérine :</h5>
                                <div>
                                    La plupart des femmes ressentent des douleurs pendant les premières heures. Dans certains cas, des nausées et de la fièvre sont observées. Un traitement préventif de ces symptômes est systématiquement administré dès le début de l’intervention. Dans quelques cas, des infections ont été décrites et sont alors traitées par antibiothérapie.
                                    <br/>
                                    Il a été également rapporté dans environ 1% des cas des lésions utérines nécessitant une hystérectomie. La possibilité d’une ménopause précoce après l’embolisation est possible (moins de 5% après 45 ans).
                                </div>


                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Risques et Bénéfices :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les bénéfices attendus de l'examen qui vous est proposé naturellement sont largement supérieurs aux risques que cet examen vous fait courir.
                            </div>
                            <div>
                                En tout état de cause, la myomectomie et l’hystérectomie présentent plus de risques, y compris douleurs, infections et hémorragies nécessitant une transfusion. D’autre part, les patientes qui ont eu une myomectomie peuvent avoir des adhérences, ce qui peut entraîner un risque de stérilité secondaire. N’hésitez pas à poser les questions sur les différents risques à votre médecin.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Que devient la fertilité après l’embolisation utérine ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il n’a pas été établi de manière certaine l’avantage d’une technique par rapport à une autre mais le Collège des Gynécologues Français préconise la myomectomie pour les femmes qui souhaitent avoir un enfant (conférence 2011).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Consultation préalable :</h5>
                            <div>
                                Le médecin radiologue interventionnel va vous voir en consultation, il est très important delui communiquer la liste des médicaments que vous prenez et lui signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>
                            <br/>

                            <h5>Apportez le jour de l’examen :</h5>
                            <div>
                                <ul>
                                    <li>Les résultats de votre examen concernant la coagulation et autres analyses qui auraient été demandées,</li>
                                    <li>Le dossier radiologique en votre possession (l'IRM+++,...)</li>
                                    <li>La liste écrite des médicaments que vous prenez.</li>
                                </ul>
                            </div>

                            <br/>

                            <h5>Avant l’examen :</h5>
                            <div>
                                Une fiche d’information sur les consignes à respecter avant l’intervention vous sera remise. Vous devrez prendre votre traitement le matin de l’intervention.
                            </div>

                            <br/>

                            <h5>Après l’examen, de retour dans votre lit :</h5>
                            <div>
                                Vous irez dans votre chambre pendant 24h (parfois plus si nécessaire), pour recevoir un traitement contre la douleur et vous reposer.
                                <br/>
                                Les membres de l'équipe médicale vous diront à quel moment vous pourrez boire et manger. Ils vous expliqueront pendant combien de temps vous devrez rester allongée.
                                <br/>
                                Si la ponction a été réalisée au pli de l’aine et afin d'éviter le risque d'hématome à l'endroit de la ponction artérielle, il vous est demandé de rester allongée pendant plusieurs heures sans plier la cuisse du côté où la piqûre a été faite.
                            </div>

                            <br/>

                            <h5>Après votre retour à domicile :</h5>
                            <div>
                                Une ordonnance vous sera donnée au moment de la sortie de la Clinique, elle comporte des médicaments contre la douleur lorsqu’elle persiste de façon modérée la semaine qui suit.
                            </div>

                            <br/>

                            <div>
                                Il est important de <strong>contacter immédiatement votre médecin</strong> ou notre équipe au n° de téléphone suivant <strong>en cas d'Urgence : 03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end) :</strong>
                                <ul>
                                    <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (si un saignement apparaît,
                                        allongez vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre
                                        entourage),
                                    </li>
                                    <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de
                                        ponction de l'artère,
                                    </li>
                                    <li>
                                        Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un
                                        changement de couleur du bras ou de la jambe concernés par la ponction artérielle.
                                    </li>
                                    <li>
                                        Si vous avez de la fièvre ou des frissons dans les jours qui suivent l’intervention.
                                    </li>
                                </ul>
                            </div>


                            <br/>
                            <h5>Dans les semaines qui suivent l’examen :</h5>
                            <div>Consultez le radiologue qui a effectué l'examen si vous avez une "boule" qui persiste au niveau du point de ponction.</div>
                            <div>Vous aurez un rendez vous d’IRM 3 à 6 mois après l’intervention afin de vérifier le résultat de l’embolisation (diminution de la taille des fibromes et de l’utérus, diminution de la vascularisation des fibrome). Un radiologue interventionnel vous recevra au décours de l’IRM afin de faire le point sur le résultat clinique (disparition, diminution ou stabilité des symptômes).</div>




                            <img
                                src={fibrome_embolisation}
                                alt="resultat embolisation fibrome uterin"
                                className={classes.imgCard}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />



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
