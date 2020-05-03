import React from 'react';
import { NavLink as Nav } from 'react-router-dom';
import styled from 'styled-components';


const TopBar = styled.div`
	background-color: hsl(221, 51%, 14%);
	color: hsl(221, 51%, 94%);
	width: 100vw;
	position: absolute;
    padding: 2px;
    height: 2.5em;
	display: flex;
	display-direction: row;
	justify-content: space-evenly;
    width: 100vw;
    z-index: 5;
`;
const TopMenu = styled.div`
    // background-color: tomato;
    padding: 10px 15px;
    transition: 250ms;
    &:hover {
        background-color: hsl(221, 51%, 64%);
        text-shadow: 2px 2px 2px hsl(221, 51%, 44%);
        box-shadow: 0 0 4px hsl(221, 51%, 34%);
    }
`;

const AppBar: React.FC = () => {

    return <TopBar>
    {['login', 
    'about us', 
    'pricing', 
    'contact', 
    'workplace' ].map((e: string, i: number) =>
        <TopMenu>
            <Nav
                style={{
                    textDecoration: 'none',
                    fontSize: '18px',
                    textTransform: 'capitalize',
                    fontWeight: 300,
                    color: 'hsl(221, 51%, 94%)',
                }}
                to={`/${e}`}
            >
                {e}
            </Nav>
        </TopMenu>
    )}
</TopBar>
}

export default AppBar;