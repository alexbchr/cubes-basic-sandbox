import { useNav } from "@trampoline/cubes";
import { navigationSchema } from "./navigation-schema";

export const useNavigation = () => useNav<typeof navigationSchema>();
