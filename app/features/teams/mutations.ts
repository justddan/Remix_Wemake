import type { SupabaseClient } from "@supabase/supabase-js";
import type { z } from "zod";
import { makeSSRClient, type Database } from "~/supa-client";
import type { formSchema } from "./pages/submit-team-page";

export const createTeam = async (
  client: SupabaseClient<Database>,
  userId: string,
  team: z.infer<typeof formSchema>
) => {
  const { data, error } = await client
    .from("teams")
    .insert({
      team_leader_id: userId,
      team_size: team.size,
      product_name: team.name,
      product_stage: team.stage as Database["public"]["Enums"]["product_stage"],
      product_description: team.description,
      roles: team.roles,
      equity_split: team.equity,
    })
    .select()
    .single();
  return data;
};
