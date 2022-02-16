import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginForm from '@common/components/LoginForm';
import Link from '@common/components/Link';
// import Link from '@mui/material/Link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <LoginForm />
        <Link href="/" variant="body2" style={{ marginTop: 20 }}>
          ← Regresar al home
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
