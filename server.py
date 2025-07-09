import os
from aiohttp import web

shared_offer = None
shared_answer = None

routes = web.RouteTableDef()

@routes.get("/caller")
async def caller(request):
    with open(os.path.join("static", "caller.html"), "r") as f:
        return web.Response(content_type="text/html", text=f.read())

@routes.get("/receiver")
async def receiver(request):
    with open(os.path.join("static", "receiver.html"), "r") as f:
        return web.Response(content_type="text/html", text=f.read())

@routes.get("/client-caller.js")
async def client_caller_js(request):
    with open(os.path.join("static", "client-caller.js"), "r") as f:
        return web.Response(content_type="application/javascript", text=f.read())

@routes.get("/client-receiver.js")
async def client_receiver_js(request):
    with open(os.path.join("static", "client-receiver.js"), "r") as f:
        return web.Response(content_type="application/javascript", text=f.read())

@routes.post("/offer")
async def post_offer(request):
    global shared_offer
    shared_offer = await request.json()
    return web.json_response({"status": "offer received"})

@routes.get("/offer")
async def get_offer(request):
    return web.json_response(shared_offer)

@routes.post("/answer")
async def post_answer(request):
    global shared_answer
    shared_answer = await request.json()
    return web.json_response({"status": "answer received"})

@routes.get("/answer")
async def get_answer(request):
    return web.json_response(shared_answer)

app = web.Application()
app.add_routes(routes)

web.run_app(app, host="0.0.0.0", port=8080)
