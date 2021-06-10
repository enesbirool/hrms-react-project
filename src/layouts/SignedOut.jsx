import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn}>Giris yap</Button>
                <Button.Or />
                <Button positive style={{ marginLeft:"0.5em" }}>Kaydol</Button>
            </Menu.Item>
        </div>
    )
}
