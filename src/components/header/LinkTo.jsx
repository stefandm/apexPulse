/* eslint-disable react/prop-types */
import {Link} from 'react-scroll'

const LinkTo = ({toggleNavbar,to,text,classNames}) => {
  return (
    <Link to={to}  smooth={true} duration={500}  onClick={toggleNavbar} className={`mx-6 text-center hover:cursor-pointer transition transform  ${classNames}`}>{text}</Link>
  )
}

export default LinkTo
