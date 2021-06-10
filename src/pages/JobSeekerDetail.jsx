import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from 'rsuite';
import { Image, Grid, Card, Icon,Button } from 'semantic-ui-react'
import JobSeekerService from '../services/JobSeekerService';

export default function JobSeekerDetail() {

    let { id } = useParams()
    const [jobSeeker, setJobSeeker] = useState([]);

    useEffect(() => {
        let jobseekerService = new JobSeekerService()
        jobseekerService.getById(id).then(result => setJobSeeker(result.data.data))
    }, [])

    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Card>
                        <Image src={jobSeeker.profileImage} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{jobSeeker.firstName+" "+jobSeeker.lastName}</Card.Header>
                            <Card.Meta>
                                <span className='date'>BirthDate : {jobSeeker.birthDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {jobSeeker.description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                            22 Friends
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>Mesaj Gönder</Button>
                            <Button style={{ marginTop:"0.5em" }} primary >Takip Et</Button>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={12} >
                    <Image spaced="right" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                
                </Grid.Column>
                
                
            </Grid>
        </div>
    )
}
