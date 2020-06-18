import { useNav } from "@hansgx/cubes/dist/navigation";
import { navigationSchema } from "./navigation-schema";

export const useNavigation = () => useNav<typeof navigationSchema>();
