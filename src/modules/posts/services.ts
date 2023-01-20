import { InputPost } from "./types";

export default class Services {
  async create(data: InputPost) {
    const endpoint = `/api/posts/create`;
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    return fetch(endpoint, options)
  }
}