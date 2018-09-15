import React, { Component } from 'react';
import links from '../theme/assets/links'

export class Footer extends Component {
    render() {
        const linksJSX = links.map((footerlink) => {
            return (
                <li>{footerlink.message}</li>
            );
        });
        return (
            <div className='footer'>
                <ul>
                    {linksJSX}
                </ul>
                <span>Instagram</span>
            </div>
        );
    }
}