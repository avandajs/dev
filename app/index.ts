import { Query } from "../core/http";

import Models from "./models/.boot"
import Controllers from "./controllers/.boot"

import serverConfig from "../configs/server"

async function boot() {
 // @ts-ignore
    const app = await new Query(serverConfig)
     .execute(
         Models,
         Controllers
     )

    // return app.getServerInstance()
    app.listen()
}


export const appInstance = boot();

