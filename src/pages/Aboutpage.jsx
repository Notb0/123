import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>Обратная связь</h1>
            <p>Пример текста Пример текста Пример текста Пример текста Пример текста Пример текста</p>
            <ul>
                <li><Link to="contacts">Пример текста Пример текста</Link></li>
                <li><Link to="team">Пример текста Пример текста</Link></li>
            </ul>

            
            <Outlet />
        </div>
    )
}

export {About}
