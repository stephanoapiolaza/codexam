import './Menu.css';

function Menu() {
  return (
    <div className="menu has-background-black-strong-2 has-text-bold has-text-white has-text-centered has-full-height">
        <aside className="menu">
            <ul className="menu-list">
                <span className="icon pt-5 pb-5"><i className="fas fa-2x fa-vial"></i></span>
                <li><a className="has-text-white">1</a></li>
                <li><a className="has-text-white">2</a></li>
            </ul>
            <ul className="menu-list">
                <li><a><span className="icon has-text-white"><i className="fas fa-cog"></i></span></a></li>
                <li><a><span className="icon has-text-white"><i className="fas fa-sign-out-alt"></i></span></a></li>
            </ul>
        </aside>
    </div>
  );
}

export default Menu;
