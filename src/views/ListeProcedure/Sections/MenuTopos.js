import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components

import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";



import sectionPillsStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";
import Liste from "../../../components/Liste/liste";

import {ListeProcedureRythmo} from "./ListeProcedureRythmo";
import {ListeProcedureCoro} from "./ListeProcedureCoro";
import {ListeProcedureRadio} from "./ListeProcedureRadio";
import {ListeProcedureExploration} from "./ListeProcedureExploration";
import GridContainer from "../../../components/Grid/GridContainer";


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
                tabButton: "Rythmologie",
                tabContent:  <Liste
                    liste={ListeProcedureRythmo}
                />
              },
                {
                    tabButton: "Coronarographie",
                    tabContent: <Liste
                        liste={ListeProcedureCoro}
                    />
                },
              {
                tabButton: "Cardio-pédiatrie",
                tabContent: ""
              },
              {
                tabButton: "Explorations non invasives",
                tabContent: <Liste
                    liste={ListeProcedureExploration}
                />
              },
              {
                tabButton: "Radiologie interventionnelle",
                tabContent: <Liste
                    liste={ListeProcedureRadio}
                />
              }
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>

    </div>
  );
}





