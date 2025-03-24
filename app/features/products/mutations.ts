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

export const createProduct = async (
  client: SupabaseClient<Database>,
  {
    name,
    tagline,
    url,
    description,
    howItWorks,
    category,
    icon,
    userId,
  }: {
    name: string;
    tagline: string;
    url: string;
    description: string;
    howItWorks: string;
    category: number;
    icon: string;
    userId: string;
  }
) => {
  const { data, error } = await client
    .from("products")
    .insert({
      name,
      tagline,
      description,
      how_it_works: howItWorks,
      url,
      icon,
      category_id: category,
      profile_id: userId,
    })
    .select("product_id")
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data.product_id;
};
