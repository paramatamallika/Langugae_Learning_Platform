import supabase from "../supabaseClient.js";

export const createUser = async (name, email, hashedPassword) => {
  return await supabase
    .from("users")
    .insert([{ name, email, password: hashedPassword }]);
};

export const findUserByEmail = async (email) => {
  return await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
};