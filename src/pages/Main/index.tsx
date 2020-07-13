import React, { useState, useCallback, FormEvent } from 'react';
import { isMobile } from 'react-device-detect';
import { FiMenu } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import {
  Container,
  IndexDiv,
  IndexHeader,
  IndexHeaderMobile,
  DivMenuOpen,
  IndexTitle,
  RegisterForm,
  InputDiv,
  ButtonDiv,
  RegisterTable,
  RegisterTableTilte,
  Footer,
} from './styles';

interface FormData {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
}

const Main: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [registers, setRegisters] = useState<FormData[]>(() => {
    const localStorageRegister = localStorage.getItem('@In8:register');

    return localStorageRegister
      ? (JSON.parse(localStorageRegister) as FormData[])
      : [
          {
            name: 'Fulano Beltrano de Oliveira da Silva',
            email: 'fulanobos@gmail.com',
            birthDate: '13/10/1995',
            phone: '(31) 9 9666-1111',
          },
        ];
  });

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = {
        name,
        email,
        birthDate,
        phone,
      };

      localStorage.setItem(
        '@In8:register',
        JSON.stringify([data, ...registers]),
      );

      setRegisters([...registers, data]);

      setName('');
      setEmail('');
      setBirthDate('');
      setPhone('');
    },
    [name, email, birthDate, phone, registers],
  );

  const handleOpenMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  return (
    <Container>
      <IndexDiv>
        {isMobile ? (
          <IndexHeaderMobile>
            {menu ? (
              <DivMenuOpen>
                <button type="button" onClick={handleOpenMenu}>
                  <FiMenu size={32} color="#fff" />
                </button>

                <li>
                  <ul>
                    <a href="#register_table">Lista</a>
                  </ul>
                  <ul>
                    <a href="#about">Sobre Mim</a>
                  </ul>
                  <ul>
                    <a href="#register_form">Cadastro</a>
                  </ul>
                </li>
              </DivMenuOpen>
            ) : (
              <button type="button" onClick={handleOpenMenu}>
                <FiMenu size={32} color="#29abe2" />
              </button>
            )}
          </IndexHeaderMobile>
        ) : (
          <IndexHeader>
            <img alt="logo" src={Logo} />

            <li>
              <ul>
                <a href="#register_form">Cadastro</a>
              </ul>
              <ul>
                <a href="#register_table">Lista</a>
              </ul>
              <ul>
                <a href="#about">Sobre Mim</a>
              </ul>
            </li>
          </IndexHeader>
        )}
        <IndexTitle>
          <h1>ESTÁGIO</h1>
          <h2>PROVA DE SELEÇÃO</h2>
        </IndexTitle>
      </IndexDiv>

      <RegisterForm id="#register_form" className="#register_form">
        <form onSubmit={handleSubmit}>
          <h1>CADASTRO</h1>
          <p>Nome</p>
          <InputDiv>
            <input
              id="name"
              name="name"
              placeholder="Fulano de Tal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputDiv>
          <p>Email</p>
          <InputDiv>
            <input
              id="email"
              name="email"
              placeholder="teste@teste.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputDiv>
          <p>Nascimento</p>
          <InputDiv>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </InputDiv>
          <p>Telefone</p>
          <InputDiv>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              placeholder="31 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputDiv>

          <ButtonDiv>
            <button type="submit">CADASTRO</button>
          </ButtonDiv>
        </form>
      </RegisterForm>

      <RegisterTable id="#register_table" className="#register_table">
        <RegisterTableTilte>
          <h1>LISTA DE CADASTRO</h1>
        </RegisterTableTilte>

        <div className="tbl-header">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Nome</th>
                <th>Email</th>
                <th>Nascimento</th>
                <th>Telefone</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table>
            <tbody>
              {registers &&
                registers.map((register, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{register.name}</td>
                    <td>{register.email}</td>
                    <td>{register.birthDate}</td>
                    <td>{register.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </RegisterTable>

      <Footer id="#about" className="#about">
        <p>Tiago Felipe Sanches Vieira</p>
        <p>tiagofsv95@gmail.com</p>
        <p>(31) 99462-3975</p>
        <p>Faculdade de Belo Horizonte</p>
      </Footer>
    </Container>
  );
};

export default Main;
