import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { TfiLinkedin } from 'react-icons/Tfi';
import { BsSearch } from 'react-icons/Bs';
import { BsHandbag } from 'react-icons/Bs';
import Image from 'react-bootstrap/Image'

const header = () => {
  return (
    <Navbar style={{paddingLeft:"40px", paddingRight:"40px"}} bg="light" expand="lg" className='text-center'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='justify-content-start'>
          <Nav.Link href="#home"><FaFacebookF /></Nav.Link>
          <Nav.Link href="#about"><SiTwitter /></Nav.Link>
          <Nav.Link href="#contact"><TfiLinkedin /></Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-center">
          <Image src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/themes/ranna/assets/img/logo-dark.png"></Image>
        </Navbar.Collapse>
        <Nav className="ml-auto">

          <Nav.Link href="#action/1"><BsSearch /></Nav.Link>
          <Nav.Link href="#action/2"><BsHandbag /></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default header
