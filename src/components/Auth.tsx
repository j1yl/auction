import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Auth: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div>
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="w-max"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        <p className="hover:underline">
          {sessionData ? "sign out" : "sign in"}
        </p>
      </button>
    </div>
  );
};

export default Auth;
