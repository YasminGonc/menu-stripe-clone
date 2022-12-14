import React from "react";

import { Container, DropdownStyles } from './styles';
import { DropdownOption } from '../Dropdown';

function Navbar() {
    return (
        <DropdownStyles>
            <Container>
                <ul>
                    <li>
                        <DropdownOption
                            name="Produtos"
                            content={() => <h1>Produtos</h1>}
                        />
                    </li>
                    <li>
                        <DropdownOption
                            name="Desenvolvedores"
                            content={() => <h1>Desenvolvedores</h1>}
                        />
                    </li>
                    <li>
                        <DropdownOption
                            name="Empresas"
                            content={() => <h1>Empresas</h1>}
                        />
                    </li>
                </ul>
            </Container>
        </DropdownStyles>
    );
}

export default Navbar;