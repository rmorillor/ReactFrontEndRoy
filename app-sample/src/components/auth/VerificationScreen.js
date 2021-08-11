import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startVerifyToken } from '../../actions/auth';
import './login.css';

export const VerificationScreen = ({ history }) => {

    const { verificationToken } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startVerifyToken(verificationToken));
        history.push('/auth/login');
    }, [dispatch, history, verificationToken]);

    return (
        <div>

        </div>
    )

}
