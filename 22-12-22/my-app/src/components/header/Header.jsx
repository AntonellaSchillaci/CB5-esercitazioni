import './header.css'
export const Header = () => {
    const menuItems = [
        {id: 1, label: 'Home', href: '#header'},
        {id: 2, label: 'Hello', href: '#hello'},
        {id: 3, label: 'Footer', href: '#footer'},
    ];

    return <header className='Header'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="./logoipsum-284.svg" alt="logo" />
                </div>
                <div className="col">
                    <nav className="nav">
                        <ul role="menu">{
                        menuItems.map(function (menuItem) {
                            //console.log({menuItem});
                            return (
                                <li key={menuItem.id} role="menuItem">
                                    <a href={menuItem.href}>{menuItem.label}</a>
                                </li>
                            )
                            })
                        }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}
