"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Env_1.default.get('NODE_ENV');
Route_1.default.get('/', async () => {
    return {
        hello: 'world',
        env: Env_1.default.get('NODE_ENV', 'undefined'),
        host: Env_1.default.get('HOST', 'undefined'),
        port: Env_1.default.get('PORT', 'undefined'),
        custom: Env_1.default.get('CUSTOM', 'undefined'),
    };
});
Route_1.default.get('/ping', async () => {
    return { ping: 'pong' };
});
Route_1.default.get('/pong', async () => {
    return { pong: 'ping' };
});
//# sourceMappingURL=routes.js.map