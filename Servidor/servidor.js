var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/plain"});
  // Pegando os parâmetros passados via URL
  var params = url.parse(request.url, true).query;
  var funcao = params.funcao; 
  var x = params.n1;
  var y = params.n2;

  

   if (funcao === "soma")
	soma(x, y);
    else if(funcao === "subtracao")
	   subtracao(x,y);
    else if(funcao === "potencia")
            potencia(x,y);
    else if( funcao === "fatorial");
	  fatorial(x);
    

  function soma(valor1,valor2){ 
   var inputX = new Number(valor1);
   var inputY = new Number(valor2);
   var som = new Number(inputX + inputY);
   response.write(som.toString());
   response.end();	
  }

  function subtracao(valor1,valor2){ 
   var inputX = new Number(valor1);
   var inputY = new Number(valor2);
   var som = new Number(inputX - inputY);
   response.write(som.toString());
  response.end();	
}

 function potencia(valor1, valor2){  
   var inputX = new Number(valor1);
   var inputY = new Number(valor2);
   var som = new Number(Math.pow(inputX,inputY));
   response.write(som.toString());
  response.end();		
 }

 function fatorial(valor1){ 
   var inputX = new Number(valor1);
   var tmp = new Number(inputX);
   if(inputX < 0)
	tmp = -1
    else if(inputX == 0)
	 tmp = 1
   
   while(inputX-- > 2){
	tmp *= inputX;
   } 
   response.write(tmp.toString());
  response.end();		
 }
}).listen(3000, '192.168.2.1');

console.log("Calculadora");
