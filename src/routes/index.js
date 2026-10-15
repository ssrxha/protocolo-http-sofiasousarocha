export function route(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end("<h1>Página Inicial</h1><p>Bem-vindo ao servidor nativo!</p>");
    console.log(`${method} ${url} 200`);
  } 

  else if (url === "/sobre") {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end("<h1>Sobre</h1><p>Esta é a página sobre o projeto.</p>");
    console.log(`${method} ${url} 200`);
  } 
  else if (url === "/antigo") {
    response.writeHead(301, { "Location": "/sobre" });
    response.end();
    console.log(`${method} ${url} 301`);
  } 
  
  else if (url.includes("/busca")) {
    if (url.includes("termo=")) {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end("<h1>Resultado da Busca</h1><p>Busca realizada com sucesso!</p>");
      console.log(`${method} ${url} 200`);
    } else {

      response.writeHead(400, { "content-type": "text/html; charset=utf-8" });
      response.end("<h1>Erro 400</h1><p>O parâmetro 'termo' é obrigatório nesta rota.</p>");
      console.log(`${method} ${url} 400`);
    }
  } 
  
  else if (url === "/admin") {
    response.writeHead(403, { "content-type": "text/html; charset=utf-8" });
    response.end("<h1>Erro 403</h1><p>Acesso proibido.</p>");
    console.log(`${method} ${url} 403`);
  } 
  
  else if (url === "/contato") {
    if (method === "GET") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end("<h1>Contato</h1><p>Página de contato disponível.</p>");
      console.log(`${method} ${url} 200`);
    } else {
      response.writeHead(405, { "Allow": "GET", "content-type": "text/plain" });
      response.end("Método Não Permitido");
      console.log(`${method} ${url} 405`);
    }
  } 

  else {
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    response.end("<h1>Erro 404</h1><p>Página não encontrada.</p>");
    console.log(`${method} ${url} 404`);
  }
}