import './Menu.css';

function Menu() {
  return (
    <div className="menu has-text-bold has-text-white has-background-dark has-text-centered">
        <aside className="menu">
            <ul className="menu-list">
                <li><a>1</a></li>
                <li><a>2</a></li>
            </ul>
            <ul className="menu-list">
                <li><a><span className="icon"><i className="fas fa-cog"></i></span></a></li>
                <li><a><span className="icon"><i className="fas fa-sign-out-alt"></i></span></a></li>
            </ul>
        </aside>
    </div>
  );
}

export default Menu;
