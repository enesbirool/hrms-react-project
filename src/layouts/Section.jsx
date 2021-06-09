import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import CitiesList from "../pages/CitiesList";
import EmployerList from "../pages/EmployerList";
import JobAdvertList from "../pages/JobAdvertList";
import JobPositionList from "../pages/JobPositionList";
import JobseekerList from "../pages/JobSeekerList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobseekerList></JobseekerList>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList></EmployerList>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertList></JobAdvertList>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList></JobPositionList>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <CitiesList></CitiesList>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}