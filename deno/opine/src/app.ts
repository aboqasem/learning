import { json, opine, urlencoded, Opine } from "./deps.ts";
import indexRouter from "./routes/index.ts";

const app: Opine = opine();

app.use(json());
app.use(urlencoded());

app.use("/", indexRouter);

export default app;
