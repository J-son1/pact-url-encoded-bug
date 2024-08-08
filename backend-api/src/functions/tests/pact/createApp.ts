import express, { Application, Request, Response } from "express";

export async function createApp(): Promise<Application> {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.post("/token", async (req: Request, res: Response) => {
    console.log(req.body)
  });

  return app;
}
