import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Link, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Paper,
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8ab4f8',
    },
    background: {
      default: '#202124',
      paper: '#202124',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
  },
});

export default function GoogleSignIn() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#202124',
          p: 2,
        }}
      >
        <Container maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#202124',
              border: '1px solid #5f6368',
            }}
          >
            <Box sx={{ mb: 3 }}>
              <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g id="qaEJec">
                  <path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path>
                </g>
                <g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g>
                <g id="BWfIk">
                  <path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path>
                </g>
                <g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g>
                <g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g>
                <g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g>
              </svg>
            </Box>

            <Typography variant="h4" component="h1" sx={{ fontWeight: 400, mb: 1 }}>
              Sign in
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Use your Google Account
            </Typography>

            <TextField
              fullWidth
              label="Email or phone"
              variant="outlined"
              margin="normal"
              sx={{ mb: 1 }}
            />

            <Box sx={{ textAlign: 'left', mb: 3 }}>
              <Link href="#" color="primary" underline="none">
                Forgot email?
              </Link>
            </Box>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Not your computer? Use Guest mode to sign in privately.{' '}
              <Link href="#" color="primary" underline="none">
                Learn more about using Guest mode
              </Link>
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Link href="#" color="primary" underline="none">
                Create account
              </Link>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  bgcolor: '#8ab4f8', 
                  color: '#202124',
                  '&:hover': {
                    bgcolor: '#aecbfa',
                  },
                  px: 3
                }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Container>

        <Box 
          sx={{ 
            display: 'flex', 
            width: '100%', 
            justifyContent: 'space-between',
            p: 2,
            maxWidth: 'sm'
          }}
        >
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <Select
              value="English (United Kingdom)"
              displayEmpty
              sx={{ 
                fontSize: '0.875rem',
                color: '#e8eaed',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }}
            >
              <MenuItem value="English (United Kingdom)">English (United Kingdom)</MenuItem>
              <MenuItem value="English (United States)">English (United States)</MenuItem>
              <MenuItem value="Español">Español</MenuItem>
              <MenuItem value="Français">Français</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={3}>
            <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem' }}>
              Help
            </Link>
            <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem' }}>
              Privacy
            </Link>
            <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem' }}>
              Terms
            </Link>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}