import express, { Request, Response } from "express";
import { routesConfigList } from "./_routes/config/routes-config-list";

const app = express();
const PORT = process.env.PORT || 3000;

// Utiliza o JSON como formato de request e response
app.use(express.json());

// Carrega as rotas
routesConfigList.forEach(routeConfig => {
    app.use(routeConfig.path, routeConfig.router);
});

// Começa a 'escutar' a porta especificada acima
app.listen(PORT, () => {
    console.log(`                                                                           
                                          tttt         hhhhhhh                                                                             iiii  
                                       ttt:::t         h:::::h                                                                            i::::i 
                                       t:::::t         h:::::h                                                                             iiii  
                                       t:::::t         h:::::h                                                                                   
  aaaaaaaaaaaaa  uuuuuu    uuuuuuttttttt:::::ttttttt    h::::h hhhhh       xxxxxxx      xxxxxxx       aaaaaaaaaaaaa  ppppp   ppppppppp   iiiiiii 
  a::::::::::::a u::::u    u::::ut:::::::::::::::::t    h::::hh:::::hhh     x:::::x    x:::::x        a::::::::::::a p::::ppp:::::::::p  i:::::i 
  aaaaaaaaa:::::au::::u    u::::ut:::::::::::::::::t    h::::::::::::::hh    x:::::x  x:::::x         aaaaaaaaa:::::ap:::::::::::::::::p  i::::i 
           a::::au::::u    u::::utttttt:::::::tttttt    h:::::::hhh::::::h    x:::::xx:::::x                   a::::app::::::ppppp::::::p i::::i 
    aaaaaaa:::::au::::u    u::::u      t:::::t          h::::::h   h::::::h    x::::::::::x             aaaaaaa:::::a p:::::p     p:::::p i::::i 
  aa::::::::::::au::::u    u::::u      t:::::t          h:::::h     h:::::h     x::::::::x            aa::::::::::::a p:::::p     p:::::p i::::i 
 a::::aaaa::::::au::::u    u::::u      t:::::t          h:::::h     h:::::h     x::::::::x           a::::aaaa::::::a p:::::p     p:::::p i::::i 
a::::a    a:::::au:::::uuuu:::::u      t:::::t    tttttth:::::h     h:::::h    x::::::::::x         a::::a    a:::::a p:::::p    p::::::p i::::i 
a::::a    a:::::au:::::::::::::::uu    t::::::tttt:::::th:::::h     h:::::h   x:::::xx:::::x        a::::a    a:::::a p:::::ppppp:::::::pi::::::i
a:::::aaaa::::::a u:::::::::::::::u    tt::::::::::::::th:::::h     h:::::h  x:::::x  x:::::x       a:::::aaaa::::::a p::::::::::::::::p i::::::i
 a::::::::::aa:::a uu::::::::uu:::u      tt:::::::::::tth:::::h     h:::::h x:::::x    x:::::x       a::::::::::aa:::ap::::::::::::::pp  i::::::i
  aaaaaaaaaa  aaaa   uuuuuuuu  uuuu        ttttttttttt  hhhhhhh     hhhhhhhxxxxxxx      xxxxxxx       aaaaaaaaaa  aaaap::::::pppppppp    iiiiiiii
                                                                                                                      p:::::p                    
                                                                                                                      p:::::p                    
                                                                                                                     p:::::::p                   
                                                                                                                     p:::::::p                   
                                                                                                                     p:::::::p                   
                                                                                                                     ppppppppp                   
                                                                                                                                                 

    `);
    console.log(`Server is running on http://localhost:${PORT}`);
});