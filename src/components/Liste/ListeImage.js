import React from "react";
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import Danger from "../../components/Typography/Danger.js";
import {Link} from "react-router-dom";

import blogsStyle from "../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";




const useStyles = makeStyles(blogsStyle);




function ListeItem(props) {

    const classes = useStyles();

    return (
        <Card plain blog className={classes.card}>

            <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                        <Link to={props.link}>
                            <img src={props.image} alt={props.alt}/>
                        </Link>
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${props.image})`,
                                opacity: "1"
                            }}
                        />
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${props.image})`,
                                opacity: "1"
                            }}
                        />
                    </CardHeader>
                </GridItem>

                <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                        <h6 className={classes.cardCategory}>{props.categorie}</h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                        <Link to={props.link}>
                            {props.title}
                        </Link>
                    </h3>
                    <p className={classes.description}>
                        {props.resume}
                    </p>
                    {props.author
                        ? <p className={classes.author}>
                            par{" "}<b>{props.author}</b>
                        </p>
                    : null}

                </GridItem>
            </GridContainer>

        </Card>
    );
}

export default function ListeImage(props) {
    const classes = useStyles();
    return (
        <div className="cd-section" {...props}>

            {/* Blogs 3 START */}
            <div className={classes.blog}>
                <div className={classes.container}>
                    <GridContainer>

                        <GridItem
                            xs={12}
                            sm={10}
                            md={10}
                            className={classes.mlAuto + " " + classes.mrAuto}
                        >

                            <br />

                            {
                                props.liste.map((objet) =>{
                                    return(<ListeItem
                                        title={objet.title}
                                        alt={objet.alt}
                                        categorie={objet.categorie}
                                        link={objet.link}
                                        image={objet.image}
                                        resume={objet.resume}
                                        author={objet.author}
                                    />)
                                })
                            }
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            {/* Blogs 3 END */}

        </div>
    );
};

ListeImage.propTypes = {
    liste : PropTypes.array.isRequired,
};



ListeItem.propTypes = {
    image : PropTypes.string.isRequired,
    resume : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    categorie : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired
};


