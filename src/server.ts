import { app } from "./app";

const server = app.listen(app.get("port"), () => {
  const 
    addr = server.address(),
    addrType = typeof addr === "string" ? `em ${addr}` : `na porta ${addr.port}`;
  console.log(`Rodando o servidor ${addrType}`);
});

export default server;
