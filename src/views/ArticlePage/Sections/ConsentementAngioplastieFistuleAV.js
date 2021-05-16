import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementAngioplastieFistuleAV.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementAngioplastieFistuleAV() {
    return (
        <ArticleBase
            title={"ANGIOLPLASTIE FISTULE ARTERIO-VEINEUSE"}
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
                            <h5>Qu’est-ce qu’une angioplastie d’abord d’hémodialyse ?</h5>
                            <div>
                                C’est un examen qui consiste à dilater un rétrécissement de votre abord d’hémodialyse.
                            </div>
                            <h5>Qu’est-ce qu’une désobstruction ?</h5>
                            <div>
                                Dans le cas où votre abord d’hémodialyse est obstrué ou bouché (l’hémodialyse est alors impossible), il est nécessaire de le déboucher pour vous permettre de poursuivre l’épuration extra-rénale (dialyse). La désobstruction consiste à extraire les caillots et à traiter la cause de l’occlusion de votre abord d’hémodialyse (généralement une sténose).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cet examen est réalisé par un médecin radiologue interventionnel assisté d’un personnel paramédical (manipulateur).
                                <br/>
                                Sous anesthésie locale ou locorégionale, le médecin va ponctionner votre abord d’hémodialyse comme lors de la fistulographie. Il va introduire un petit cathéter pour confirmer l’existence d’une sténose et ensuite dilater l’endroit rétréci avec un ballonnet monté sur un petit guide métallique.
                                Après avoir dégonflé le ballonnet, il réalisera une fistulographie de contrôle pour vérifier la qualité du résultat. Dans certains cas, il pourra être amené à refaire une ou plusieurs autres dilatations, ou à mettre en place une endoprothèse (stent, ressort métallique).
                                <br/>
                                Si l’abord de dialyse est thrombosé (bouché), les caillots seront aspirés par un tuyau avant de traiter les sténoses (rétrécissements).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Y a-t-il des risques liés à l’angioplastie ou à la désobstruction ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximale, comporte un risque de complication.
                            <br/>
                                Avec les techniques modernes, l’angioplastie et la désobstruction présentent peu de risques.
                                Cependant, certaines complications au niveau du point de ponction ou de la fistule peuvent survenir de même que des complications générales.

                                <ul>
                                    <li>Au niveau du point de ponction, il peut se produire un hématome ou un nouveau saignement. En cas d’hématome, celui-ci se résorbera dans 2 à 3 semaines. Tout à fait exceptionnellement des lésions peuvent nécessiter un traitement complémentaire par chirurgie.</li>
                                    <li>Au niveau de la fistule, la dilatation peut entraîner une rupture qui peut être traitée par un ressort métallique et, très rarement, par une intervention chirurgicale.</li>
                                    <li>Sur un plan général, les risques sont dus à l’injection d’un produit iodé. L’injection peut entraîner une réaction d’intolérance.</li>
                                    <li>Le risque de migration d’un caillot dans les poumons est faible et souvent sans conséquence.</li>
                                </ul>

                                La réalisation d’une dilatation ou d’une désobstruction d’un abord d’hémodialyse peut s’accompagner dans de rares cas d’une complication infectieuse. L’infection peut être locale ou généralisée (septicémie). Elle se manifeste soit comme un petit abcès au niveau de la zone de piqûre survenant dans les jours ou semaines après l’examen, soit comme une fièvre avec ou sans frissons dans les heures ou les jours qui suivent l’examen.
                                <br/>
                                Ceci doit être signalé très rapidement à votre médecin de façon à ce que vous soyez pris en charge et traité rapidement (ne prenez pas d’antibiotiques sans avis médical).
                                <br/>
                                Les complications réellement graves sont rarissimes. Le risque de décès est exceptionnel (jamais reporté dans notre centre).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un premier commentaire pourra vous être donné juste après l’examen. Il ne s’agira là que d’une première approche. Le compte-rendu écrit sera disponible à votre sortie.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>

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

                            <h5>Pour l’examen :</h5>
                            <div>
                                Vous devez prendre vos médicaments usuels et manger un repas léger.
                            </div>

                            <h5>Après l’examen :</h5>
                            <div>
                                Après l’examen, le plus souvent vous pourrez rentrer chez vous directement ou en passant par votre centre de dialyse en fonction de votre histoire récente.
                                <br/>
                                Afin d’éviter le risque d’hématome à l’endroit de la piqûre, un point de suture est parfois réalisé.
                                <br/>
                                Le point de suture doit impérativement être enlevé lors de la prochaine séance de dialyse (section du fil et traction).
                                <br/>
                                En cas de saignement, vous devez dans un premier temps appuyer vous-même sur l’endroit de la piqûre (ponction) et prendre contact d’urgence avec votre centre de dialyse ou avec le service de radiologie interventionnelle.
                            </div>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>Vous devez vous reposer et surtout surveiller l’absence de fièvre et de nouveau saignement.</div>

                            <h5>Si besoin, reprenez contact avec nous (03 90 67 39 91) ou avec votre centre de dialyse :</h5>
                            <ol>
                                <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction de la fistule.</li>
                                <li>Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un changement de couleur du bras concerné par la ponction vasculaire.</li>
                                <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                <li>Si vous avez de la fièvre ou des frissons.</li>
                            </ol>

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
