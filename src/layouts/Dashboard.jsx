import React from "react";
import { Grid } from "semantic-ui-react";
import Section from "./Section";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <SideBar/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}