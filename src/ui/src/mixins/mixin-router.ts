import Vue = require('vue');
import VueRouter = require('vue-router');
import { Route } from 'vue-router';
export { RouteNames } from '../routes';

export type IRouterMixinData = VueRouter;

export type IRouteMixinData = Route;

export interface IRouterMixin {
    $route: IRouteMixinData;
    $router: IRouterMixinData;
}

