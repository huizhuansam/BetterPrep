import { createContext } from "react";
import { User } from "../types/APIResponsesTypes";

const LoggedInUserContext = createContext<
  [User | null, (loggedInUser: User | null) => void]
>([{ username: "" }, () => {}]);

export default LoggedInUserContext;
