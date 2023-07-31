import React from 'react'

import { AuthForm } from '../components/AuthForm'

export const AuthPage: React.FC = () => (
  <section className="section section-auth-page">
    <h2 className="title">Авторизация</h2>
    <AuthForm />
  </section>
)
