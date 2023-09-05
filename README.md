![alt text](https://github.com/Mat0108/PoSkin/blob/master/Front/public/favicon.ico?raw=true)

## Set the .env with the template

To obtain the uid and gud information, run the following commands: 
```bash
docker build --pull --rm -f "user\Dockerfile" -t poskinuser:latest "user"
docker run -it poskinuser bash
```
In the bash optenu with the last command, type id to retrieve the uid and gud


## Launch the app
We can easily run the whole with only a single command:
```bash
docker-compose up
```

Docker will pull the MongoDB and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up -d
```

To access the application :

```bash
site web : http://localhost:3000 
mongo-express : http://localhost:8081
```


## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all
```

