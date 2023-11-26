import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function LeftBar() {
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Son Ziyaretçiler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>mxbozkurt</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Enes Birol</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Firdevs Birol</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
