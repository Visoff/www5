// api/rest.ts

import expressWs from 'express-ws'

export default function (app:expressWs.Application) {
    app.route("/api/rest")
        .get((req, res) => {
            res.status(200).send("hello")
        })
}