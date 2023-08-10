// index.ts

import express from 'express'
import expressWs from 'express-ws'

import rest from './api/rest'
import ws from './api/ws'

const app = expressWs(express()).app

rest(app)
ws(app)

app.listen(8030, () => {
    console.log("app is listening on port 8080")
})