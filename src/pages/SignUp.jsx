import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { carlog } from '../assets/Index';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: .5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 20px;
  border: none;
  background-color: green;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const SignupText = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
`;

const LinkStyled = styled(Link)`
  color: green;
  text-decoration: none;
`;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      navigate('/login');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={carlog} alt="SignUpImage" />
      </ImageContainer>
      <Form onSubmit={handleSubmit}>
        <Heading>Daftar</Heading>
        <InputContainer>
          <Label htmlFor="username">Nama</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        <Button type="submit">Sign Up</Button>
        <SignupText>
          Sudah Punya Akun?{' '}
          <LinkStyled to="/login">
            Log in here
          </LinkStyled>
        </SignupText>
      </Form>
    </Container>
  );
};

export default SignUp;
