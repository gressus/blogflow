import { error } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { Deta } from "deta";

export async function GET({ fetch, request, params, locals }) {
  const furl = params.furl;

  if (import.meta.env.VITE_DETA_PROJECT) {
    const deta = Deta(import.meta.env.VITE_DETA_PROJECT);
    const dbBlockInfo = deta.Base(`post_votes_${locals.lang}`);

    const res = await dbBlockInfo.get(furl);
    return json({
      res,
    });
  } else {
    throw error(405)
  }
}