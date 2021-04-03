import { Router } from "../deps.ts";

const router = Router();

// GET home page.
router.get("/", (req, res, next) => {
  res.json({
    message: "Hello, World!",
  });
});

export default router;
