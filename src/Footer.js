import './Footer.css';

function Footer() {
  return (
      <footer className="footer pt-1 pb-0 has-background-black-strong-4 has-text-white has-border-black">
          <div className="content has-text-centered">
              <p>
                  <strong>Codexam</strong> by <a href="https://stephanoapiolaza.cl">Stephano Apiolaza</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </p>
          </div>
      </footer>
  );
}

export default Footer;
