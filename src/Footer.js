
const Footer = ({length}) => {
  const today = new Date();
  // console.log(length);

  return (
    <footer className="footer">
      <p style={{margin:'20px', color:'white'}}>
        {length} list {length <= 1 ? 'item' : 'items'}
      </p>
      <p className="copyright">
        Copyright {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;