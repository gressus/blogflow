import { error } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { Deta } from "deta";

export async function GET({ fetch, request, params, locals }) {
  if (import.meta.env.VITE_DETA_PROJECT) {
    const furl = params.furl;
    const deta = Deta(import.meta.env.VITE_DETA_PROJECT);
    const dbBlockInfo = deta.Base(`post_comments_${locals.lang}`);
    const res = await dbBlockInfo.fetch({ furl: furl });
    return json({
      comments: res?.items
    });
  } else {
    throw error(405);
  }
}

export async function PUT({ fetch, request, params, locals }) {
  if (import.meta.env.VITE_DETA_PROJECT) {
    const furl = params.furl;
    let comment = await request.json();
    comment.created_at = Date.now();
    comment.furl = furl;

    if (import.meta.env.VITE_OPENAI_API_KEY) {
      let body = {
        input: comment.text,
      };
      let OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
      var options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      };
      var res = await fetch("https://api.openai.com/v1/moderations", options);
      var responseCode = res.status;
      var responseJSON = await res.json();
      const flagged = responseJSON.results[0].flagged;

      console.log("flagged " + JSON.stringify(flagged));

      if (flagged) {
        throw error(406);
      }

      // Advanced SPAM detection
      // let messages = [
      //   { role: "user", content: comment.text },
      //   {
      //     role: "system",
      //     content: `You are a moderator. You can answer only: yes or no. Is this message similar to SPAM?`,
      //   },
      // ];
      // var formDataForToken = {
      //   model: "gpt-3.5-turbo",
      //   messages: messages,
      // };
      // var chatUrl = "https://api.openai.com/v1/chat/completions";
      // options = {
      //   method: "POST",
      //   body: JSON.stringify(formDataForToken),
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${OPENAI_API_KEY}`,
      //   },
      // };
      // res = await fetch(chatUrl, options);
      // responseCode = res.status;
      // responseJSON = await res.json();
      // let text = responseJSON["choices"][0]["message"]["content"];
      // console.log("text " + text);
      // comment.spam = text.toLowerCase().includes("yes".toLowerCase());
    }

    const deta = Deta(import.meta.env.VITE_DETA_PROJECT)
    const dbBlockInfo = deta.Base(`post_comments_${locals.lang}`);
    let item = await dbBlockInfo.put(comment);
    
    return json({
      item
    });
  } else {
    throw error(405);
  }
}