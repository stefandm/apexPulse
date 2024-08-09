/* eslint-disable react/prop-types */
import {Link} from 'react-scroll'

import './LinkTo.css'

const LinkTo = ({toggleNavbar,to,text,classNames}) => {
  return (
    <Link to={to}  smooth={true} duration={500} id='link' onClick={toggleNavbar} className={`mx-6 text-center hover:cursor-pointer transition transform select-none ${classNames}`}>{text}</Link>
  )
}

export default LinkTo
