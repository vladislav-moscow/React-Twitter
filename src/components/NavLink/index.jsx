import {Link} from 'react-router-dom';
function NavLink({url, text}) {
  return (
    <Link to={url}>{text}</Link>
  );
}

export default NavLink;