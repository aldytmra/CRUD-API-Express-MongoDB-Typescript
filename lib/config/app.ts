import express, { Application, application } from "express";
import * as bodyParser from "body-parser";
import mongoose = require("mongoose");
import environment from "../environment";
import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import { UserRoutes } from "../routes/user_routes";

class App {

    public app: Application;
    public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

    private test_routes: TestRoutes = new TestRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();
    private user_routes: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.user_routes.route(this.app);
        this.common_routes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }

}
export default new App().app;