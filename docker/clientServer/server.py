# https://stackoverflow.com/questions/49906065/docker-python-server-not-listening
import socketserver
import json

PORT = 10000

class PoCServer(socketserver.BaseRequestHandler):


    def handle(self):
        addr = self.client_address[0]
        print("[{}] incoming connection...".format(addr))

        buff = bytes()
        while True:
            rawdata = self.request.recv(256)
            if not rawdata: break
            buff = buff + rawdata

        data = json.loads(buff.decode())

        with open("data/" + data["name"] + ".txt", "w") as f:
            f.write(data["msg"])

        print("[{}] file ".format(addr) + data["name"] + ".txt written...")

server =  socketserver.ThreadingTCPServer(("localhost", PORT), PoCServer)
print("[+] server listening on port #", PORT)
server.serve_forever()  
