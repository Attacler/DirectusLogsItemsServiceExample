import { defineEndpoint } from "@directus/extensions-sdk";

export default defineEndpoint((router, { services }) => {
  //use ItemsService from the services, we will use this to read the logs
  const { ItemsService } = services;

  //listen to http://localhost:8055/getlogs
  router.get("/", async (_req, res) => {
    //initialize the itemsservice for the collection logs and provide the schema
    const logs = new ItemsService("logs", { schema: _req.schema });

    //read logs (max 200) and give this back to the res(ponse)
    res.json(await logs.readMany());
  });
});
