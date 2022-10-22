/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Env.get('NODE_ENV')

Route.get('/', async () => {
  return { 
    hello: 'world',
    env: Env.get('NODE_ENV', 'undefined'),
    host: Env.get('HOST', 'undefined'),
    port: Env.get('PORT', 'undefined'),
    custom  : Env.get('CUSTOM', 'undefined'),
  };
})

Route.get('/ping', async () => {
  return { ping: 'pong' };
})

Route.get('/pong', async () => {
  return { pong: 'ping' };
})
