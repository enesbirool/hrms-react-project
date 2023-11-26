import React from "react";
import { Route } from "react-router";
import { Grid, GridColumn } from "semantic-ui-react";
import JobseekerList from "../pages/JobSeekerList";
import JobSeekerDetail from "../pages/JobSeekerDetail";
import EmployerList from "../pages/EmployerList";
import JobPositionList from "../pages/JobPositionList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobseekerList} />
            <Route exact path="/jobseekers" component={JobseekerList} />
            <Route exact path="/jobseeker/:id" component={JobSeekerDetail} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobpositions" component={JobPositionList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}