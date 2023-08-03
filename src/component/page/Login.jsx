import React, {useRef, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {loginApi} from "../../api/auth";
import Button from '../atoms/Button';

const Login = () => {
    const navigate = useNavigate();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // 서버에 로그인 요청을 보냅니다.
            const response = await loginApi(email, password)

            // 로그인 성공 시 처리할 내용
            console.log('로그인 성공:', response.data);

            navigate("/");
        } catch (err) {
            // 로그인 실패 시 처리할 내용
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }

            console.error('회원가입 실패:', err.message);
            errRef.current.focus();

        }
    };

    return (
        <section>
            <h1>로그인</h1>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
            />
            <Button onClick={handleLogin}>Login</Button>
        </section>
    );
};

export default Login;
