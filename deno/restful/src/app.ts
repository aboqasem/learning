import { serve } from "https://deno.land/std@0.82.0/http/server.ts";

const port = 8000;
const server = serve({ port });

for await (const req of server) {
  if (req.url === "/") {
    req.respond({
      body: "Hello, World!\n",
    });
  } else if (req.url === "/home") {
    req.respond({
      body: "Hello, Home!\n",
    });
  } else {
    req.respond({
      status: 404,
      body: "404 Not Found :(",
    });
  }
}
