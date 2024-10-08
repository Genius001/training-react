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
  text-align: center;
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

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 1rem 0;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (/\S+@\S+\.\S+/.test(email)) { // Basic email validation
        navigate('/');
      } else {
        setError('Please enter a valid email address');
      }
    } else {
      setError('Please fill in both fields');
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={carlog} alt="LoginImage" />
      </ImageContainer>
      <Form onSubmit={handleSubmit}>
        <Heading >Masuk</Heading>
        {error && <ErrorText>{error}</ErrorText>}
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </InputContainer>
        <Button type="submit">Login</Button>
        <SignupText>
          Belum punya akun?{' '}
          <LinkStyled to="/signup">
            Daftar sini
          </LinkStyled>
        </SignupText>
      </Form>
    </Container>
  );
};

export default Login;
