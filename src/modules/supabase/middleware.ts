import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {

    const supabase = createServerClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
      {
        cookies: {}
      }
    );

    await supabase.auth.getUser();
  }

  return response;
}