import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css'
import AuthForm from '../components/AuthForm';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt with:', { email, password });
  };
  return(
    <div className="home-container">
    <h1 className="home-title">Welcome to FatBook</h1>
    <AuthForm />
  </div>
  );

}

export default Home;