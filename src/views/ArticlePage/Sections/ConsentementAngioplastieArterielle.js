import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementAngioplastieFistuleAV.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementAngioplastieArterielle() {
    return (
        <ArticleBase
            title={"ANGIOLPLASTIE ARTERIELLE"}
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
                               Cette intervention consiste à reperméabiliser (déboucher) les artères atteintes de rétrécissement ou d’occlusion en les dilatant à l’aide d’un petit ballon. Un ballonnet est positionné dans l’artère au niveau du rétrécissement ou de l’occlusion puis gonflé. Ce faisant, la plaque d’athérome est écrasée par le ballonnet contre la paroi et l’artère est rouverte. Ce ballonnet est introduit dans l’artère à travers la peau. Cette intervention peut améliorer ou faire disparaître vos symptômes car elle permet à l’artère d’amener une plus grande quantité d’oxygène à vos tissus sans nécessiter une intervention chirurgicale.
                               <br/>
                               La dilatation au ballon n’est parfois pas suffisante et la pose d’un stent (ressort) est parfois nécessaire.
                           </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’angioplastie comprend trois étapes principales :
                                <ol>
                                    <li>Mise en place du cathéter d’angioplastie (petit tuyau) au niveau de l’artère obstruée après ponction artérielle sous anesthésie locale,</li>
                                    <li>Gonflage du ballonnet pour déboucher l’artère obstruée,</li>
                                    <li>Retrait du cathéter et fermeture du point de ponction (compression ou système de fermeture).</li>
                                </ol>
                                Lors du gonflement du ballonnet, vous pourrez ressentir une légère sensation douloureuse qui ne durera que quelques instants et qui s’interrompra dès que l’on dégonflera le ballonnet. Parfois, l’angioplastie est complétée par l’implantation d’un stent.
                                <br/>
                                Il est parfois utilisé un ballon ou stent « actif », recouvert d’un médicament, pour améliorer les résultats de l’angioplastie dans le temps. Ces traitements sont réservés aux patients présentant un risque de resténose (en cas de diabète, de longs rétrécissements ou occlusions, par exemple).
                                <br/>
                                Ce risque pourra vous être expliqué et détaillé à tout moment.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Qu’est-ce qu’une endoprothèse ou “stent” ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il s’agit d’un petit ressort en métal que l’on met à l’intérieur de l’artère, par le même petit trou que celui qui a été fait pour la dilatation. Ce stent est laissé en place définitivement. Son rôle est de maintenir l’artère parfaitement ouverte.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Y a-t-il des risques liés à l’angioplastie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                <br/>
                                Les risques sont d’une part ceux de l’artériographie :
                                <ul>
                                    <li>l’allergie aux produits de contraste iodés. L’injection peut entraîner une réaction d’intolérance ou d’allergie.</li>
                                    <li>les complications au point de ponction (ces risques sont détaillés dans la fiche “artériographie” que vous devrez lire également).</li>
                                </ul>
                                <br/>
                                <ul>
                                    <li>la dissection de l’artère (dédoublement de la paroi) : elle est traitée dans le même temps par l’implantation d’une endoprothèse (stent),</li>
                                    <li>une embolie (migration d’un caillot sanguin) qui sera également traitée dans le même temps par exemple par aspiration.</li>
                                    <li>une rupture de l’artère : elle est traitée dans le même temps par la mise en place d’un stent couvert (stent recouvert d’une membrane étanche couvrant la fuite).</li>
                                </ul>
                                <br/>
                                Ces 2 derniers risques sont rares inférieurs à 5%.
                                <br/>
                                Exceptionnellement, l’examen peut entraîner le décès (pas de cas reporté dans notre centre).
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques de ne pas faire l’angioplastie ?</h4></CardHeader>
                        <CardBody>

                           <div>
                               Grâce à l’angioplastie, les symptômes dont vous souffrez et qui sont liés au rétrécissement de vos artères seront diminués ou supprimés.
                               <br/>
                               Vos médecins ont jugé utile cette intervention. L’abstention vous expose à une persistance des symptômes et peut entraîner des complications secondaires.
                           </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>

                            <div>
                                Un premier commentaire pourra vous être donné juste après l’examen. Il ne s’agira là que d’une première approche, le compte-rendu écrit sera disponible dans les meilleurs délais.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>

                            <div>
                                Lors de la consultation ou de la convocation, il est très important de communiquer la liste des médicaments que vous prenez et signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>

                            <h5>Apportez le jour de l’examen :</h5>
                            <ul>
                                <li>Les résultats des examens de laboratoire qui vous auraient été demandés.</li>
                                <li>Le dossier radiologique en votre possession (artériographie, échographies, doppler, scanners, IRM ...).</li>
                                <li>La liste écrite des médicaments que vous prenez.</li>
                            </ul>

                            <h5>Pour l’examen :</h5>
                            <div>Une fiche d’information vous est fournie séparément sur les consignes à respecter le jour de l’intervention.</div>

                            <h5>Après l’examen :</h5>
                            <div>
                                Dans la plupart des cas, vous resterez hospitalisé après l’angioplastie afin d’être surveillé. Les membres de l’équipe médicale de l’étage d’hospitalisation vous diront quand vous pourrez manger et combien de temps vous devrez rester allongé dans votre lit.
                                <br/>
                                De façon à éviter le risque d’hématome à l’endroit de la ponction artérielle, il vous est demandé de rester allongé pendant plusieurs heures sans plier la jambe du côté où la piqûre a été faite.
                            </div>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>
                                Vous devez vous reposer 24 heures.
                                <br/>Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses
                                dans les 48 heures suivant l’angioplastie.
                                <br/>Il vous est recommandé d’arrêter définitivement toute intoxication tabagique le cas échéant.
                                <br/>
                                En cas de question ou de problèmes avant ou après l’intervention, et en particulier dans les cas suivants :
                                <ol>
                                    <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez- vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                    <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction de l'artère.</li>
                                    <li>Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un changement de couleur du bras ou de la jambe concernée par la ponction artérielle.</li>
                                    <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                    <li> Si vous avez de la fièvre ou des frissons dans les jours qui suivent l’intervention,
                                        il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant :
                                        <strong>03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end)</strong>
                                    </li>
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
