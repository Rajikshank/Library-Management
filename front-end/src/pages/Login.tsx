import { useQuery } from "react-query";
import { getUsers } from "../api/users";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { data } = useQuery("users", getUsers);

  return (
    <div>
      <Input />
      <Button>Login</Button>
    </div>
  );
};

export default Login;