import styled from "styled-components";
import Head from "next/head";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login Page</title>
      </Head>

      <LoginContainer>
        <Logo src="https://th.bing.com/th/id/R.35ffa6e353468280a59e5b4672b8aba0?rik=e5Y6Je9zOSfWrg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fwhatsApp-logo-1.png&ehk=2kmD9AQIuBNDDrrdprGXc3ua6fK6W8wJ%2fiV0VbQhDsI%3d&risl=&pid=ImgRaw&r=0" />
        <Button>Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Button = styled.button``;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const LoginContainer = styled.div``;
const Container = styled.div`
display: grid;
place-items: center;

`;
