import { config } from "dotenv";
import { runtimeError } from "@avanda/error";
let t = __dirname.split(/node_modules|core\/app/);
let ROOT_DIR = t[0];
config({
    path: ROOT_DIR + '.env'
});
let get = function (key, fallback = null) {
    let value = process.env[key];
    if (!value && fallback == null)
        throw new runtimeError(`No fallback value specified for ${key} .env property`);
    return (value || fallback);
};
export { get };