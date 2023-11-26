import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon, Button, Image, Card, Modal, Label, Container } from "semantic-ui-react";
import EmployerService from "../services/EmployerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getEmployers().then(result=>setEmployers(result.data.data))
  }, [])
  return (
    <div>
      <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Employers</Header.Content>
            </Header>
            <Table color="red" key="red">
            </Table>
            <Card.Group>
                {employers.map((employer) =>
                    <Card key={employer.id}>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='medium'
                                src="https://www.naceweb.org/uploadedimages/images/2019/feature/the-four-career-competencies-employers-value-most.jpg"
                            />
                            <Card.Header>Company : {employer.companyName}</Card.Header>
                            <Card.Meta>Email : {employer.email}</Card.Meta>
                            <Card.Description>
                                Website : {employer.website}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Takip Et
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                )}

            </Card.Group>
    </div>
  );
}
