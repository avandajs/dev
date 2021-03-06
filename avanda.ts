#! /usr/bin/env ts-node
import Avanda from "./core/cli"
import Models from "./app/models/.boot"
import Commands from "./app/commands/.boot"
import {Connection} from "./core/app"
import Config from "./configs/database"

async function boot() {
    return Avanda(
        Commands,
        Models,
        await Connection(Config)
    )
}

boot();


