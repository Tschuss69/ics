import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";



import sectionPillsStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";
import ListeImage from "../../../components/Liste/ListeImage";
import {ListeTopoPace} from "./ListeTopoPace";
import {ListeTopoElectrophy} from "./ListeTopoElectrophy";
import {ListeTopoCoronarographie} from "./ListeTopoCoronarographie";
import {ListeTopoCongenital} from "./ListeTopoCongenital";
import {ListeTopoImagerieCardiaque} from "./ListeTopoImagerieCardiaque";
import {ListeTopoRadiologie} from "./ListeTopoRadiologie";

const useStyles = makeStyles(sectionPillsStyle);

export default function MenuTopos() {
  const classes = useStyles();

  const parsedUrl = new URL(window.location.href);

  const active = parsedUrl.searchParams.get("active");


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
          <NavPills
              active={active ? parseInt(active) : 3}
            alignCenter
            tabs={[
              {
                tabButton: "Pace-Def",
                tabContent: <ListeImage liste={ListeTopoPace}/>
              },
              {
                tabButton: "Rythmologie",
                tabContent: <ListeImage liste={ListeTopoElectrophy}/>
              },
                {
                    tabButton: "Coronarographie",
                    tabContent: <ListeImage liste={ListeTopoCoronarographie}/>
                },
              {
                tabButton: "Cardio-pédiatrie",
                tabContent: <ListeImage liste={ListeTopoCongenital}/>
              },
              {
                tabButton: "Echographie cardiaque",
                tabContent: <ListeImage liste={ListeTopoImagerieCardiaque}/>
              },
              {
                tabButton: "Radiologie interventionnelle",
                tabContent: <ListeImage liste={ListeTopoRadiologie}/>
              }
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>

    </div>
  );
}

