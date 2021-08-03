import { serve } from 'https://deno.land/std/http/server.ts'

const port = 8000
const s = serve({port})

console.log(`deno running at 192.168.1.7:${port}`)

for await (const req of s) {
    req.respond({
        body: 'hello from your first deno server!'
    })
}
