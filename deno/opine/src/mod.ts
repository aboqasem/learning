import "https://deno.land/x/dotenv/load.ts";
import app from "./app.ts";

const port = parseInt(Deno.env.get("PORT") ?? "3000");
const env = Deno.env.get("DENO_ENV") ?? "development";

app.set("port", port);
app.set("env", env);

// Start our Opine server on the provided or default port.
app.listen(port, () => console.log(`listening on http://localhost:${port}/`));
