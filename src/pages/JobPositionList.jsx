import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {
    const [positions,setPositions]=useState([]);

    useEffect(()=>{
        let positionService=new JobPositionService();
        positionService.getJobPositions().then(result=>setPositions(result.data.data))
    },[]);

    return (
        <div>
          <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>Job Positions</Header.Content>
          </Header>
          <Table color="blue" key="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İs Baslıkları</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {positions.map((position) => (
                <Table.Row key={position.id}>
                  <Table.Cell>{position.jobTitle}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
}