import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementAngioplastieVeineuse.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementAngioplastieVeineuse() {
    return (
        <ArticleBase
            title={"ANGIOPLASTIE VEINEUSE"}
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
                        <CardHeader color="info"><h4>Pourquoi vous proposer une angioplastie veineuse?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vous pouvez nécessiter la réalisation d’une angioplastie veineuse dans un certain nombre de cas.
                                Le plus souvent, l’angioplastie veineuse est proposée dans le cadre du syndrome post-thrombotique.
                                Il s’agit d’une maladie veineuse chronique provoquée par les séquelles d’une thrombose veineuse profonde (phlébite).
                            </div>
                            <br/>
                            <div>
                                La phlébite peut altérer le système veineux et le retour du sang vers le cœur par deux grands mécanismes. Le caillot obstruant la veine se transforme en tissu fibreux (cicatrice) mais ne s'élimine pas, ou incomplètement. Il persiste alors un obstacle, une obstruction, plus ou moins complète, gênant le retour veineux.
                            </div>
                            <br/>
                            <div>
                                Le caillot peut s'éliminer, la veine se reperméabiliser, mais en laissant des parois veineuses abîmées, épaissies, et des valvules altérées, incompétentes, laissant se développer un reflux du sang vers le bas en position debout ou assise.
                            </div>
                            <br/>
                            <div>
                                Il faut ajouter un troisième mécanisme qu'est l'altération de la pompe musculaire du mollet : Elle est due à la limitation de la marche, l'enraidissement de la cheville et la perte de souplesse veineuse.
                            </div>
                            <br/>
                            <div>
                                Les symptômes du syndrome post-thrombotique sont :
                                <ul>
                                    <li>Des douleurs de jambe : il peut s'agir de lourdeurs, de fatigabilité. La douleur d'origine veineuse est le
                                        plus souvent aggravée par la station debout, le piétinement sur place. Elle est améliorée par le
                                        mouvement actif des jambes, l'allongement et la surélévation des membres inférieurs.</li>
                                    <li>Un œdème des chevilles et jambes. N'apparaissant tout d'abord qu'en fin de journée, il s'installe avec le
                                        temps et devient plus dur.</li>
                                    <li>Des dilatations veineuses. Il peut s'agir de varicosités ou télangiectasies, de veines réticulaires, de
                                        véritables varices.</li>
                                    <li>Des anomalies cutanées : l'eczéma variqueux, la dermite ocre, la dermo-hypodermite de stase plus ou
                                        moins inflammatoire.</li>
                                    <li>Un ulcère veineux.</li>
                                    <li>Des fourmillements ou un prurit (envie de se gratter).</li>
                                </ul>
                            </div>
                            <br/>
                            <div>En plus des traitements par bas de contention et par médicaments, il est parfois indiqué de “déboucher” la veine.</div>
                            <br/>
                            <div>Depuis plusieurs années, s’est développée l’angioplastie ou dilatation des veines rétrécies ou bouchées,

                                donnant de très bons résultats.
                            </div>
                            <br/>
                            <div>
                                Dans d’autres cas, l’angioplastie vous est proposée pour ouvrir une veine iliaque coincée entre la colonne vertébrale et une artère (syndrome de Cockett) ou la veine rénale gauche coincée entre 2 artères (syndrome de casse-noisette).
                                <br/>
                                Le syndrome de Cockett peut engendrer un gonflement du membre inférieur du côté du rétrécissement, des varices dans le bas ventre ou favoriser la survenue d’une phlébite.
                                <br/>
                                Le syndrome de casse-noisette (nutrcracker syndrome) peut, en coinçant la veine du rein gauche, être responsable d’un gonflement du rein et du passage de sang ou de protéines dans les urines, voire du développement de varices dans le bas ventre.
                                <br/>
                                Vous recevrez une information détaillée de ces maladies en consultation.
                            </div>



                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cette technique consiste à positionner un petit ballon dégonflé dans la veine au niveau du rétrécissement ou de l’occlusion et à le gonfler. La paroi de la veine est alors réouverte. Ce ballonnet est introduit dans la veine à travers la peau, le plus souvent en passant par le cou et/ou le pli de l’aine.
                            </div>
                            <br/>
                            <div>
                                Un ou plusieurs stents (ressorts) seront le plus souvent posés pour garder la lumière de la veine bien ouverte.
                            </div>
                            <br/>
                            <div>
                                Cette intervention peut améliorer ou faire disparaître vos symptômes car elle permet à la veine de ramener une plus grande quantité de sang hors du membre inférieur vers le cœur sans nécessiter une intervention chirurgicale.
                            </div>
                            <br/>
                            <div>
                                Bien que cette intervention offre d’excellents résultats à long terme (amélioration des symptômes), il est parfois observé (environ 5 à 10% des cas) une obstruction des stents dans les 24h suivant l’intervention. Cette obstruction conduira à la réalisation d’une deuxième intervention pour déboucher les stents, le plus rapidement possible. Cette éventuelle seconde intervention est réalisée dans les mêmes conditions que la première.
                            </div>
                            <br/>
                            <div>
                                Cette intervention sera réalisée par un radiologue interventionnel.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Le déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’intervention est réalisée sous anesthésie générale (l’anesthésiste que vous verrez en consultation vous détaillera sa technique).
                            </div>
                            <div>
                                L’angioplastie comprend trois étapes principales :
                                <ul>
                                    <li>Mise en place du cathéter d’angioplastie au niveau de la veine obstruée après ponction veineuse sous anesthésie locale,</li>
                                    <li>Gonflage du ballonnet pour déboucher la veine obstruée et mise en place d’un ou de plusieurs stents (ressorts),</li>
                                    <li>Retrait du cathéter et compression du point de ponction.</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Qu’est-ce qu’une endoprothèse ou “stent” ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il s’agit d’un petit ressort en métal que l’on met à l’intérieur de la veine, par le même petit trou que celui qui a été fait pour la dilatation. Ce stent est laissé en place définitivement. Son rôle est de maintenir la veine parfaitement ouverte quand le ballonnet d’angioplastie n’a pas été suffisamment efficace.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Y a-t-il des risques liés à l’angioplastie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                <br/>
                                Les risques sont d’une part ceux de la phlébographie :
                                <ul>
                                    <li>l’allergie ou intolérance aux produits de contraste iodés</li>
                                    <li>les complications au point de ponction : hématome (ou bleu) qui se résorbera la plupart du temps spontanément en quelques jours.</li>
                                </ul>
                                <br/>
                                Mais aussi les risques propres à l’angioplastie (rares) :
                                <ul>
                                    <li>la dissection de la veine (dédoublement de la paroi) : elle est traitée dans le même temps par l’implantation d’une endoprothèse ou stent,</li>
                                    <li>la rupture de la veine (exceptionnelle) : elle est traitée dans le même temps par la mise en place d’un stent recouvert d’une membrane étanche.</li>
                                    <li>l’embolie (migration d’un caillot sanguin) qui sera également traitée dans le même temps par exemple par aspiration ou traitement anticoagulant.</li>
                                </ul>
                                <br/>
                                Les complications graves (nécessitant une hospitalisation prolongée ou une intervention chirurgicale) sont rarissimes et aucun décès n’a été rapporté dans notre centre.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques de ne pas faire l’angioplastie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Grâce à l’angioplastie, les symptômes dont vous souffrez et qui sont liés au rétrécissement de vos veines seront diminués ou supprimés.
                            <br/>
                                Vos médecins ont jugé utile cette intervention. L’abstention vous expose à une persistance ou une aggravation des symptômes et peut entraîner des complications secondaires.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un premier commentaire pourra vous être donné juste après l’intervention. Le compte-rendu écrit vous sera transmis lors de la sortie de la clinique.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le médecin radiologue va vous voir en consultation, il est très important de lui communiquer la liste des médicaments que vous prenez et lui signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>
                            <br/>

                            <h5>Apportez le jour de l’examen :</h5>
                            <ol>
                                <li>Les résultats de votre examen sanguin.</li>
                                <li>Le dossier radiologique en votre possession (radiographies, échographies, scanners, IRM ...).</li>
                                <li>La liste écrite des médicaments que vous prenez.</li>
                            </ol>


                            <h5>Pour l’examen :</h5>
                            <div>Une fiche d’information vous est fournie séparément sur les consignes à respecter le jour de l’intervention.</div>


                            <h5>Après l’examen :</h5>
                            <div>
                                Dans la plupart des cas, vous resterez hospitalisé quelques heures après l’angioplastie afin d’être surveillé. Les membres de l’équipe médicale de l’étage d’hospitalisation vous diront quand vous pourrez manger et combien de temps vous devrez rester allongé dans votre lit. Il vous est demandé de vous lever 1heure après l’intervention afin de marcher et d’améliorer l’irrigation des stents pour éviter qu’ils ne se bouchent. Si vous vous sentez trop faible, des brassards gonflables (compression pneumatique intermittente – CPI) seront positionnés sur vos membres inférieurs pour favoriser le retour du sang vers le cœur.
                                <br/>
                                Le traitement fluidifiant sera repris rapidement.
                            </div>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>
                                Vous devez vous reposer 24 heures.
                                Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses dans les 48 heures suivant l’angioplastie.
                            </div>


                            <h5>Dès votre retour à la maison :</h5>
                            <div>
                                Vous devez vous reposer 24 heures.
                                Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses dans les 48 heures suivant l’angioplastie.

                            <br/>
                                En cas de question ou de problèmes avant ou après l’intervention, et en particulier dans les cas suivants :
                                <ol>
                                    <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez- vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                    <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction de la veine.</li>
                                    <li>Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un changement de couleur du bras ou de la jambe concernée par la ponction veineuse.</li>
                                    <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                    <li>
                                        Si vous avez de la fièvre ou des frissons dans les jours qui suivent l’intervention,
                                        il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant :
                                        03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au <strong>03 90 67 40 10 (nuit et week-end)</strong>
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
