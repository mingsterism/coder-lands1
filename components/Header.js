import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href={{ pathname: '/'}}>
        <a style={linkStyle}> Home </a>
      </Link>
      <Link href={{pathname: '/about'}}>
        <a style={linkStyle}> About </a>
      </Link>
    </div>
  )
}

export default Header;