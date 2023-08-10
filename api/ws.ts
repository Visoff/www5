import expressWs from "express-ws";

export default function (app:expressWs.Application) {
    var users:any[] = []
    app.ws("/api/ws", (ws) => {
        users.push(ws)
        ws.on("message", (data) => {
            const str = data.toString()
            users.forEach(user => user.send(str))
        })
    })
}