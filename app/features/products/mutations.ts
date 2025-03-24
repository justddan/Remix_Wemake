import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "~/supa-client";

export const createProductReview = async (
  client: SupabaseClient<Database>,
  {
    productId,
    userId,
    review,
    rating,
  }: { productId: string; userId: string; review: string; rating: number }
) => {
  const { error } = await client.from("reviews").insert({
    product_id: Number(productId),
    profile_id: userId,
    review,
    rating,
  });
  if (error) {
    throw new Error(error.message);
  }
};
