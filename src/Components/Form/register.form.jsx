import { Button, Checkbox, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import img from 'assets/undraw_mobile_images_rc-0-q.svg'
import { userFormStyle } from 'designTypes/userForm';
import { Form, Link } from 'react-router-dom';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

const currencies = [
    {
        label: 'male'
    },
    {
        label: 'female'
    },
    {
        label: 'other'
    }
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegisterForm = () => {
    const style = userFormStyle()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ paddingY: '150px' }}>
            <Container>
                <Box className={style.root}>
                    <Box className="headertext">
                        <Typography component='h2' variant='h2'>
                            Create a New Account
                        </Typography>
                        <Typography>
                            come join our community ! <Link to="/login">sign in here</Link>
                        </Typography>
                    </Box>
                    <Grid container   spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography component='h4' variant='h4'>
                                You can also sign with this
                            </Typography>
                            <Button className='btn1'>Facebook</Button>
                            <Button  className='btn2'>Twitter</Button>
                            <Button  className='btn3'>Google</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <form className='userForm'>
                                <TextField id="outlined-basic" label="Name " variant="outlined" required className='inputField' />
                                <TextField id="outlined-basic" label="Email " variant="outlined" required  className='inputField'  />
                               
                                <FormControl  variant="outlined"  className='inputField' required>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormControl  variant="outlined"  className='inputField' required>
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Gender"
                                    defaultValue="EUR"
                                    helperText="Please select your Gender"
                                    required
                                    className='inputField'
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Checkbox {...label} defaultChecked /><span>terms and condition</span>
                                <Button  className='btn1'>Register</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default RegisterForm;