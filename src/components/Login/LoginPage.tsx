import { useContext } from "react";
import ButtonSearch from "@/components/Button/Button";
import InputLogin from "@/components/Input/Input";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import ButtonLoading from "@/components/Button/ButtonLoading";

const LoginPage = () => {
  const { isValid, handleSubmitForm, handleChangeEmail, handleChangePassword } =
    useContext(ProjectContext) as ProviderState;
  return (
    <section className="h-screen w-screen flex flex-col">
      <form
        onSubmit={handleSubmitForm}
        className="h-full flex flex-col justify-center items-center"
      >
        <h2 className="font-press-start">Login</h2>
        <InputLogin
          type="email"
          label="Email"
          placeholder="email@email.com"
          defaultValue=""
          onChange={handleChangeEmail}
        />
        <InputLogin
          type="password"
          label="Password"
          placeholder="Password"
          defaultValue=""
          onChange={handleChangePassword}
        />
        {isValid ? (
          <ButtonLoading />
        ) : (
          <ButtonSearch size="md" className="m-1" type="submit">
            Login
          </ButtonSearch>
        )}
        <div>
          <h2 className="text-center">
            <b>User data</b>
          </h2>
          <p>
            <b>Email:</b> admin@admin.com
          </p>
          <p>
            <b>Password:</b> admin
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
