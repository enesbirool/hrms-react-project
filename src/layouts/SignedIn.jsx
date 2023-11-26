import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"/>
                <Dropdown pointing="top left" text="Birol">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>

                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon=""/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
