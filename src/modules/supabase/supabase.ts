import { createBrowserClient } from '@supabase/ssr';

export const getSupabaseClient = () => {
  let client = null;
  if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
    client = createBrowserClient(
      process.env.SUPABASE_URL, 
      process.env.SUPABASE_KEY
    );
  }
  
  return client;
}