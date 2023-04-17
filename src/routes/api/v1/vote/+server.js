import { error } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { Deta } from "deta";

/** @type {import('./$types').POST} */
export async function POST({ fetch, request, params, locals }) {
  const { key, isUp } = await request.json();

  const deta = Deta(import.meta.env.VITE_DETA_PROJECT)
  const dbBlockInfo = deta.Base(`post_votes_${locals.lang}`);

  const updates = {
    votes: dbBlockInfo.util.increment(isUp ? 1 : -1), 
  };
  
  try {
    const res = await dbBlockInfo.update(updates, key);
  } catch (error) {
    await dbBlockInfo.put({ votes: isUp ? 1 : -1 }, key);
  }
  
  return json({
    done: true
  });
}