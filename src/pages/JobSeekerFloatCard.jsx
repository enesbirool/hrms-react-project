import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Modal } from 'semantic-ui-react'

function JobSeekerCard({name,lastname,image,jobseekerId}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="detailbutton" basic color="blue">Detaylar</Button>}
    >
      <Modal.Header>{name+" "+lastname+"   "}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={image} wrapped />
        <Modal.Description>
          <p>İşe Alım İçin Mesaj Gönderebilirsin...</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Hayır</Button>
        <Button style={{ marginLeft:"0.5em",borderTop:"2px",margin: "4px 2px"}} onClick={() => setOpen(false)} positive>
          Mesaj Gönder
        </Button>
        <Link to={"/jobseeker/"+jobseekerId}><Button primary style={{ marginLeft:"0.5em",borderTop:"2px",margin: "4px 2px"}}>Profiline Git</Button> </Link>
      </Modal.Actions>
    </Modal>
  )
}

export default JobSeekerCard