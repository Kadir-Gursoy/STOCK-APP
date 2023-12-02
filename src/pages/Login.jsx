import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
  import { object, string} from 'yup';
  import Formik from 'Formik';

const Login = () => {
  const navigate = useNavigate()
  
  //!harici validayon şeeması


const loginSchema = object({
 
  email: string().email(),
  password:string().required()
});



  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 45,
              height: 45,
            }}
          >
            <LockIcon size="33" />
          </Avatar>
          <Typography
            variant="h3"
            align="center"
            mb={5}
            color="secondary.dark"
          >
          <Formik initialValues={{}} 
            validationSchema={loginSchema}
            onsubmit={(values, action)=>{

              //TODO login (values) POST işlemi
              action.resetForm()
              action.setSubmiting(false)
            }}
            
          >
          {({handleChange, handleBlur, values, touched, errors})=>(   
          <Form>
          <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              />
            <TextField
              label="password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
          </Form>
)}    
            </Formik>    

            Login
          </Typography>

       
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
