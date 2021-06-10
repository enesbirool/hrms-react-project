import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Container, Button, Menu, Icon, Dropdown, Flag } from 'semantic-ui-react';
import "../App.css";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history=useHistory()

   function handleSignOut(){
        setIsAuthenticated(false)
        history.push("/")
   }
   function handleSignIn(){
    setIsAuthenticated(true)
    }
    return (
        <div>
            <Container>
                <Menu  color="teal" inverted>
                    <Container>
                        <Menu.Item>
                            <img src='https://react.semantic-ui.com/logo.png' />
                        </Menu.Item>
                        <Menu.Item name="Ana Sayfa" as={NavLink} to="/" active>
                            <Icon name="home" />Ana Sayfa
                        </Menu.Item>
                        <Menu.Item name="ilanlar" />
                        <Menu.Item name="Belgeler" />
                        <Dropdown item text='Haberler'>
                            <Dropdown.Menu>
                                <Dropdown.Item>İş Veren</Dropdown.Item>
                                <Dropdown.Item>İş Arayan</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Menu position="right">
                            <Dropdown item text='Dil'>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Flag name='england' />English</Dropdown.Item>
                                    <Dropdown.Item><Flag name='russia' />Russian</Dropdown.Item>
                                    <Dropdown.Item><Flag name='spain' />Spanish</Dropdown.Item>
                                    <Dropdown.Item><Flag name='turkey' />Turkish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {isAuthenticated?<SignedIn signOut={handleSignOut}></SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}
                        </Menu.Menu>
                    </Container>
                </Menu>
            </Container>
        </div>
    );
}