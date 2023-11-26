import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";

export default function JobAdvertList() {
    return (
        <div>
          <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>Job Adverts</Header.Content>
          </Header>
          <Table color="blue" key="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İs İlanları</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
            </Table.Body>
          </Table>
        </div>
      );
}