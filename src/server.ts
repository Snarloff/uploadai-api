import { fastifyAutoload } from '@fastify/autoload'
import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'

import chalk from 'chalk'
import path from 'path'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifyAutoload, {
  dir: path.join(__dirname, 'routes'),
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(chalk.bgBlue.white.bold(' Iniciando a API '))
    console.log(chalk.green.bold('✔ Servidor está ouvindo na porta ') + chalk.yellow.bold('http://localhost:3333/'))
    console.log(chalk.green.bold('✔ Desenvolvimento por ') + chalk.magenta.bold('Snarloff'))
  })
