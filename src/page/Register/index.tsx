import React from 'react';
import { Input } from 'components/Input';
import { Link } from 'components/Link';
import { useRegisterHooks } from './hooks';
import { withRouter } from 'react-router';

const Register = () => {
  const { formData, submitRegisterForm, updateForm } = useRegisterHooks();
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={require('assets/img/investimento.png').default}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              id="email"
              name="email"
              type="email"
              required
              title="Email address"
              onChange={updateForm}
              value={formData.email}
            />
            <Input
              id="login"
              name="login"
              type="username"
              required
              title="Login name"
              onChange={updateForm}
              value={formData.login}
            />
            <Input
              id="nome"
              name="nome"
              required
              title="Full Name"
              onChange={updateForm}
              value={formData.nome}
            />
            <Input
              id="senha"
              name="senha"
              type="password"
              required
              title="Password"
              onChange={updateForm}
              value={formData.senha}
            />
            <Input
              id="senhaConfirmacao"
              name="senhaConfirmacao"
              type="password"
              required
              title="Password confirm"
              onChange={updateForm}
              value={formData.senhaConfirmacao}
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={submitRegisterForm}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <i className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center">
            <Link title="Already have an account?" to="/login" />
          </div>
        </div>
        <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/iconpro86" title="Iconpro86">Iconpro86</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </div>
  );
};

export default withRouter(Register);
