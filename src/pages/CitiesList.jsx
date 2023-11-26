import React, { useState, useEffect } from 'react'
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';
import { Table, Header, Icon } from "semantic-ui-react";
import CityService from '../services/CityService';

export default function CitiesList() {

    const [cities, setCities] = useState([]);
    useEffect(() => {
        let citiesService = new CityService()
        citiesService.getCities().then(result => setCities(result.data.data))
    })

    return (
        <div>
          <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>Cities</Header.Content>
          </Header>
          <Table color="blue" key="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Şehirler</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {cities.map((city) => (
            <Table.Row key={city.cityId}>
              <Table.Cell>{city.cityName}</Table.Cell>
            </Table.Row>
          ))}
            </Table.Body>
          </Table>
        </div>
    )
}
