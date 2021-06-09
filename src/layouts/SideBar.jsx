import React from 'react'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import CitiesList from '../pages/CitiesList'
import Section from './Section'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
  </Sidebar>
)
const VerticalSidebar = ({ animation, direction, visible }) => (
  
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
    color="teal"
  >
    <Menu.Item as='a' icon="labeled" vertical>
      <Icon name='user' />
      JobSeeker
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='user' />
      Employeer
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='user' />
      Job Position
    </Menu.Item>
    <Menu.Item>
      <CitiesList></CitiesList>
    </Menu.Item>
    
  </Sidebar>
)

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}

function SidebarExampleTransitions() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  })

  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom' || direction === 'top'
  return (
    <div>
      <Button className="menu"
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down'})
        }
      >
        Menu
      </Button>

      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        {vertical && (
          <HorizontalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}
        {!vertical && (
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Section></Section>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}
export default SidebarExampleTransitions