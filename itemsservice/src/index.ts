import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ action }, { services }) => {
  //use ItemsService from the services, we will use this to create the logs
  const { ItemsService } = services;

  //this action will trigger after the creation of any item
  action("items.create", async (payload, { schema }) => {
    //make sure to filter out the logs collection to prevent a loop
    if (payload.collection == "logs") return;
    //initialize the itemsservice for the collection logs and provide the schema
    const logs = new ItemsService("logs", { schema });

    //create the log
    await logs.createOne({
      log: payload,
    });
  });
});
