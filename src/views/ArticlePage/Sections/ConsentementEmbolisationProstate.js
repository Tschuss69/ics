import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementEmbolisationProstate.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementEmbolisationProstate() {
    return (
        <ArticleBase
            title={"EMBOLISATION DES ARTERES PROSTATIQUES (EAP)"}
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
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cette intervention mini-invasive consiste à traiter les patients atteints d’une hypertrophie bénigne de la prostate (adénome) symptomatique. Elle vise à occlure (emboliser) à l’aide de petites billes les artères nourrissant la prostate et l’adénome. L’occlusion de ces artères induit une nécrose partielle de la glande prostatique qui diminuera progressivement de taille et se « ramollira » afin de soulager les symptomes d’obstruction urinaire. L’EAP est pratiquée depuis le début des années 2010 et s’inscrit comme une alternative aux techniques chirurgicales classiques. L’intervention est réalisée sous une légère anesthésie, est bien tolérée et comporte habituellement peu de complications ou effets indésirables.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment peut-on traiter un adénome de prostate symptomatique ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Par des médicaments pris par voie orale :
                                <ul>
                                    <li>
                                        Les alpha bloquants ou extraits de plante ne modifient pas ni n’inversent la croissance de l’adénome prostatique.
                                    </li>
                                    <li>
                                        Les inhibiteurs de la 5-alpha réductase diminuent à terme (6 à 9 mois avant efficacité optimale) d’environ 50% le volume de l’adénome.
                                    </li>
                                </ul>
                            </div>
                            <br/>
                            <div>
                                Par chirurgie d’exérèse (résection transurétrale électrique, énucléation ou vaporisation au laser, adénomectomie voie haute) peut traiter de manière efficace l’adénome symptomatique.
                            </div>
                            <br/>
                            <div>
                                Plus récemment, par embolisation des artères prostatiques.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>La radiographie utilise des rayons X</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’EAP nécessite le recours aux rayons X.
                                <br/>
                                En matière d’irradiation des patients, aucun risque n’a pu être démontré compte tenu des faibles doses utilisées et toutes les précautions sont prises pour limiter au strict minimum la zone examinée.
                                <br/>
                                L’intervention proposée utilise les rayons X afin de « voir » à travers la peau et de minimiser l’invasivité du geste.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’intervention est réalisée en ambulatoire, c’est-à-dire que nous ne dormirez normalement pas à la clinique.
                                <br/>
                                L’heure d’admission, les modalités pratiques et administratives vous serons détaillées par notre secrétariat.
                                <br/>
                                Vous serez, dans un premier temps, pris en charge par l’équipe infirmière du service d’ambulatoire puis par l’équipe de radiologie interventionnelle et d’anesthésie.
                                <br/>
                                L’EAP est une intervention « mini invasive » qui ne nécessite qu’une petite ponction (piqûre) au pli de l’aine ou au poignet.
                                Elle est réalisée sous <strong>anesthésie locale et sédation</strong>, par un radiologue interventionnel entraîné.
                                <br/>
                                Après avoir fait une anesthésie locale au pli de l’aine ou au poignet, il insère un petit cathéter (tuyau) dans l’artère après avoir fait un petit trou dans celle-ci (ponction artérielle). Le cathéter est guidé sous scopie jusqu’aux artères du bassin.
                                <br/>
                                A ce niveau, une injection de produit de contraste et la réalisation d’une angiographie en 3D permettent le repérage des artères de la prostate : leur nombre (1 à 2 de chaque côté) mais aussi leur diamètre (habituellement compris entre 1 et 2mm).
                                <br/>
                                Une fois en place dans les différentes artères de la prostate avec un tout fin tuyau (microcathéter), le radiologue y injecte de toutes petites particules sphériques, de la taille d’un grain de sable, qui vont occlure ces artères. En général, une embolisation de l’ensemble des artères prostatiques est réalisée, sauf lorsque l’anatomie est trop tortueuse et ne permet pas de cathétériser une d’entre elles.
                                <br/>
                                L’intervention est extrêmement minutieuse et dure en général 2 heures.
                            </div>
                        </CardBody>
                    </Card>


                    <Card blog>
                        <CardHeader color="info"><h4>Y a-t-il des risques liés à l’angioplastie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                                <br/>
                                Les risques sont d’une part ceux de l’artériographie :
                                <ul>
                                    <li>Localement, au niveau du point de ponction, il peut se produire un hématome (ou bleu) qui se résorbera en deux à trois semaines.</li>
                                    <li>
                                        Sur un plan général, les risques sont dus à l'injection du produit iodé utilisé pour le repérage artériel :
                                        <ul>
                                            <li>
                                                L’injection peut entraîner une réaction d’intolérance ou d’allergie. Les complications réellement graves sont rarissimes ; le risque de décès est exceptionnel (jamais reporté dans notre centre).
                                            </li>
                                            <li>
                                                es accidents rénaux, également liés au produit iodé, sont notamment possibles chez certains sujets atteints de maladies fragilisant le rein (insuffisance rénale chronique, diabète, myélome, etc.).
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <br/>
                                Mais aussi les risques propres à l’embolisation :
                                <ul>
                                    <li>La dissection de l’artère (dédoublement de la paroi) : elle est traitée dans le même temps par l’implantation d’une endoprothèse (stent) si nécessaire,</li>
                                    <li>Une embolie (migration d’un caillot sanguin) qui sera également traitée dans le même temps, par exemple par aspiration (moins de 1%).</li>
                                    <li>Une rupture de l’artère : elle est traitée dans le même temps par la mise en place d’un stent couvert (stent recouvert d’une membrane étanche couvrant la fuite) (moins de 1%).</li>
                                    <li>L’infection urinaire peut arriver dans moins de 10% des cas.</li>
                                    <li>Des cas de souffrance transitoire de la vessie, du rectum et du pénis ont été décrits, tous évoluant vers la guérison en quelques jours avec soins locaux.</li>
                                    <li>Aucun décès n’a été décrit jusqu’à présent dans notre centre.</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>




                    <Card blog>
                        <CardHeader color="info"><h4>Résultats à attendre :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les dernières études publiées rapportent la non infériorité de l’embolisation des artères prostatiques par rapport à la chirurgie au prix d’une moindre invasivité et de moins d’effets indésirables.
                                <br/>
                                Il n’y a notamment pas d’éjaculation rétrograde après embolisation.
                                <br/>
                                La durabilité des résultats nécessite encore d’être étudiée, la technique étant relativement nouvelle.
                                <br/>
                                Cependant, l’EAP n’empêche pas une éventuelle chirurgie secondaire.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Consultation préalable :</h5>
                            <div>
                                Le médecin radiologue interventionnel va vous voir en consultation, il est très important de lui communiquer la liste des médicaments que vous prenez et lui signaler si vous prenez des anticoagulants type AVK (Previscan, Sintrom, Coumadine), de l’Eliquis, du Xarelto, de l’Efient, du Brilique, de l’Aspirine ou du Plavix ou tout autre médicament qui fluidifie le sang.
                            </div>
                            <br/>

                            <h5>Apportez le jour de l’examen :</h5>
                            <div>
                                <ol>
                                    <li>Les résultats des examens de laboratoire qui vous auraient été demandés.</li>
                                    <li>Le dossier radiologique en votre possession (artériographie, échographies, doppler, scanners, IRM ...).</li>
                                    <li>La liste écrite des médicaments que vous prenez.</li>
                                </ol>
                            </div>
                            <br/>

                            <h5>Pour l’examen : </h5>

                            <div>Une fiche d’information vous est fournie séparément sur les consignes à respecter le jour de l’intervention.</div>

                            <h5>Après l’examen :</h5>
                            <div>
                                Dans la plupart des cas, vous resterez hospitalisé quelques heures après l’intervention. Le bracelet sera dégonflé au bout de 45 minutes en cas de ponction au poignet. Vous devrez rester allongé pendant 3h en cas de ponction au pli de l’aine. Les membres de l’équipe paramédicale de l’étage d’hospitalisation vous diront quand vous pourrez manger et à quelle heure vous pourrez quitter le service.
                                De façon à éviter le risque d’hématome à l’endroit de la ponction artérielle, il vous est demandé de rester allongé pendant plusieurs heures sans plier la jambe du côté où la piqûre a été faite.
                            </div>

                            <h5>Y a-t-il des effets indésirables ?</h5>
                            <div>
                            Bien que rares, un certain nombre d’effets indésirables ont été décrits :
                            <br/>
                            Symptômes urologiques :
                            <ul>
                                <li>Une diminution du volume de l’éjaculat a été décrite par (2 articles scientifiques) chez quelques patients (10-15% dans ces 2 cohortes), sans réelle documentation scientifique (absence de spermogramme). Elle était transitoire sur une durée de 6 mois.</li>
                                <li>Infection urinaire : les infections urinaires sont rares depuis que l’on ne pose plus de sonde urinaire lors de l’embolisation.
                                    En cas de survenue, consulter le médecin traitant ou prendre antibiotiques habituels.</li>
                                <li>Hématurie macroscopique (sang dans les urines : urines rosacées) : exceptionnelle.</li>
                                <li>Rétention aiguë d’urines (incapacité à uriner) : exceptionnelle si le patient reprend ses mictions immédiatement après l’embolisation.</li>
                            </ul>
                            En cas de doute, ne pas hésiter à nous consulter.
                                <br/>
                                Symptômes génitaux :
                                <ul>
                                    <li>Balanite (ulcération blanchâtre ou taches bleutées de la muqueuse du gland du pénis) : exceptionnelle. Elle nécessite en cas de survenue des soins locaux (pommades), et involue sous 5 à 15j.</li>
                                    <li>En cas de survenue, nous contacter.</li>
                                </ul>
                                <br/>
                                Symptômes digestifs :
                                <ul>
                                    <li>Rectorragies (gouttes ou traces de sang dans les selles) : exceptionnelles.</li>
                                </ul>
                            </div>


                            <Card blog>
                                <CardHeader color="info"><h4>Dès votre retour à la maison :</h4></CardHeader>
                                <CardBody>
                                    <div>
                                        Vous devez vous reposer 24 heures.
                                        <br/>
                                        Vous ne devez pas conduire pendant les 24 premières heures ni effectuer d’exercices physiques intenses dans les 48 heures suivant l’embolisation.
                                        <br/>
                                        Un certain nombre de symptômes sont attendus après embolisation.
                                        <br/>
                                        Ils sont la traduction de l’inflammation et de l’irritation de la prostate et des organes avoisinants, en réaction à l’embolisation. Elles impactent l’urètre, la vessie, et le rectum. Elles font partie de ce qu’on appelle le « syndrome post-embolisation ».
                                        <br/>
                                        Ils surviennent dès le soir même qui suit l’embolisation, sont tous transitoires, et durent en moyenne 5 jours. Ils peuvent parfois persister pendant 10 jours, rarement 15.
                                        <br/>
                                        Deux classes médicamenteuses vous sont prescrites afin de lutter contre ces phénomènes : des corticoïdes (effet anti-inflammatoire) et des antalgiques (cf ordonnance).
                                        <br/>
                                        Les symptômes prédominants seront:
                                        <ul>
                                            <li>Des brûlures mictionnelles (par irritation de l’urètre) durant en moyenne 5 à 7 jours (peuvent être intenses les 72 premières heures).</li>
                                            <li>Une pollakiurie = accentuation des envies pressantes (par irritation de la vessie) pouvant survenir toutes les 30 minutes, notamment la première nuit.</li>
                                            <li>Une constipation (par irritation du rectum), pouvant être marquée les 3 premiers jours.</li>
                                            <li>Des brûlures ou douleurs anales ou pesanteurs pelviennes (par irritation de l’anus).</li>
                                        </ul>
                                        <br/>
                                        Ces symptômes rectaux et anaux sont uniquement dus à l’inflammation, et non à une embolisation non-ciblée des artères rectales.
                                        <br/>
                                        Des signes Généraux sont également possibles les 5 premiers jours :
                                        <ul>
                                            <li>Une fièvre peu élevée (inférieure à 39°C) est tout à fait normale pendant les 5 premiers jours : la nécrose du tissu prostatique sécrète des toxines « pyrogènes » dans le sang, faisant augmenter la température corporelle de manière physiologique. Les corticoïdes diminuent cet effet. En dessous de 39°C, il ne s’agit pas d’une fièvre d’infection urinaire.</li>
                                            <li>Des douleurs dans les muscles sont également fréquentes, dues au même phénomène. Elles sont également bien gérées par les corticoïdes.</li>
                                        </ul>
                                        <br/>
                                        Enfin, une hémospermie (sang dans le sperme) est habituelle, et persiste jusqu’à deux mois après le traitement.
                                        <br/>
                                        En cas de question ou de problèmes avant ou après l’intervention, et en particulier dans les cas suivants :
                                        <ol>
                                            <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez-vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                            <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction de l'artère.</li>
                                            <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                            <li>Si vous avez des brûlures en urinant, des frissons ou une fièvre >39° plus de 10 jours après l’embolisation ; il s’agit probablement d’une infection urinaire,</li>
                                        </ol>
                                       <br/>
                                        Il est important de contacter immédiatement votre médecin ou notre équipe au n° de téléphone suivant :
                                        <strong>03 90 67 39 91 (heures ouvrables) ou le service des Urgences de Rhena au 03 90 67 40 10 (nuit et week-end)</strong>
                                    </div>
                                </CardBody>
                            </Card>





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
