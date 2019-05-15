import React from 'react';
import {leftMenu, rightMenu} from './headerItems';
import {Link} from 'react-router-dom';

const CLASS = 'sv-Header';

export default class Header extends React.Component {
    renderLeftMenu = () => {
        let headers = leftMenu.map( (key, value) => {
            return(
                <Link to={key.location} class={'items'} key={key.name+value}>
                        {
                        (key.leftIcon !== '')
                        ?
                        <img src={key.leftIcon} alt={key.name}/>
                        :
                        ''
                        }
                    {key.name}
                </Link>
            )
        });
        return headers;
    }
    renderRightMenu = () => {
        let headers = rightMenu.map( (key, value) => {
            return(<Link to={key.location} className={'items'} key={key.name+value}>{key.name}</Link>)
        });
        return headers;
    }
    render() {
        return(<div className={CLASS}>
                <div className={CLASS+'-left'}>
                    {
                        this.renderLeftMenu()
                    }
                </div>
                <div className={CLASS+'-right'}>
                    {
                        this.renderRightMenu()
                    }
                </div>
            </div>
        );
    }
}