import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../Register/SocialLogin/socialLogin';


const Login = () => {


    const { logIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log("checking current location", location);


    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo)


        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire("Success", "User Successfully Logged in ", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleValidateCaptcha = (e) => {
        const User_Capthca_value = e.target.value;
        if (validateCaptcha(User_Capthca_value)) {
            setDisabled(false);
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha here.." className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                {/* TODO: apply disabled for re captcha */}
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        <p className='mx-auto '><small>New Here? <Link to="/register" className='text-blue-800 font-semibold' >Create an account</Link> </small></p>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;