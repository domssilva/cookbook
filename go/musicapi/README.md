# Database config
1. start service `systemctl start mysql`
1. check if it's running `systemctl status mysql`
1. set local envs
1. run db scripts to seed the db

## Set envs necessary for db connection
1. vim ~/.bashrc
1. set values:
```bash
export DB_USER=your-db-user
export DB_PASSWORD=your-db-password
export DB_HOST=your-db-host
export DB_PORT=your-db-port
export DB_NAME=your-db-name
```

## Running mysql migrations
`mysql -u <username> -p gomusic < ./database/init.sql`

or log and run from the mysql terminal

1. `mysql -u <username> -p`
1. `source ~/code/music-api/database/init.sql`