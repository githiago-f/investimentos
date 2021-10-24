import { Input } from "components/Input";
import { Link } from "components/Link";
import { useLoginHooks } from "./hooks";

type Props = {
  onAuthenticate: (user: U)
}

export const Login = () => {
  const { 
    updateForm,
    submitLoginForm,
    formData,
    error
  } = useLoginHooks();
  
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
              id="login"
              name="login"
              type="username"
              required
              title="Login"
              onChange={updateForm}
              value={formData.login}
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
          </div>

          <div hidden={!error.hasError}>
            <p className="text-red-600">{error.message}</p>
          </div>

          <div>
            <button
              type="submit"
              onClick={submitLoginForm}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <i className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center">
            <Link title="Don't have an account?" to="/register" />
          </div>
        </div>
        <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/iconpro86" title="Iconpro86">Iconpro86</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </div>
  );
};