import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-left">
          <img src="/assets/assets_frontend/logo.svg" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer-right">
          <h2>COMPANY</h2>
          <p>Home</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <p>+1-212-456-7890</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>
      <p className="copyRight">
        Copyright © 2024 GreatStack - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
