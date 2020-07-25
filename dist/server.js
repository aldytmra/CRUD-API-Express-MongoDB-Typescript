"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const environment_1 = __importDefault(require("./environment"));
const PORT = environment_1.default.getPort();
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
