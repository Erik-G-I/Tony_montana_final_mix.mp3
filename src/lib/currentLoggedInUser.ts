import { createClient } from "@/utils/supabase/server";
import { getUserInfo } from "./getUserInfo";

export default async function currentLoggedInUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    return null;
  }

  const userId = user.id;

  const userInfo = await getUserInfo(userId);
  return userInfo;
}
