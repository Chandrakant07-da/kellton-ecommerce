import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../components/assets/crwns.svg'
const Header =()=>{
     return(
          <>
               <div className='header'>
                    { /** logo */}
                    <Link className='logo-container'
                        
                         to='/'>
                         <Logo className='logo'/>
                    </Link>
                    {/**oPTIONS */}
                    <div className='options'>
                         <Link
                              className='option'
                              to='/shop'>
                                   SHOP
                         </Link>
                         <Link
                              className='option'
                              to='/signin'>
                                   SIGN IN
                              </Link>
                              <Link
                              className='option'
                              to='/contact'>
                                   CONTACT
                              </Link>
                    </div>
               </div>
          </>
     )
}
export default Header;