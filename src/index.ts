import Database from "./lib/mysqlManager";
import DiscordManager from "./lib/discordManager";
import ExpressManager from "./lib/expressManager";
import router from "./web/routes/router";
import EventHandler from "./discord/eventHandler";
import DotenvManager from "./lib/envManager";
import EventManager from "./lib/eventManager";
import CacheManager from "./lib/cacheManager";

DotenvManager.getInstance();
EventHandler.getInstance().then(() => {});
EventManager.getInstance();
Database.getInstance();
CacheManager.getInstance();
DiscordManager.getInstance();
ExpressManager.getInstance().getApp().use("/", router);

EventManager.getInstance().emit("app_ready", "Application is ready to accept requests");