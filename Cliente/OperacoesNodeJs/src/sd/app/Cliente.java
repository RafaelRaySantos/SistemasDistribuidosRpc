package sd.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class Cliente {
	

	public static void main(String[] args) throws IOException, ConnectException{
		int valor1, valor2;
		
		 String ip = "192.168.2.1";
		int port = 3000;
		String operacao;
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("Digite o primeiro numero: ");
		valor1 = scanner.nextInt();
		
		System.out.print("Digite o segundo numero: ");
		valor2 = scanner.nextInt();
		
		System.out.print("Informe a operação ");
		operacao = scanner.next();
		String resultado;
		resultado = realizarOperacao("http://" + ip + ":" + port + "/?funcao=" + operacao + "&n1=" + valor1 + "&n2=" + valor2);
		System.out.println(resultado);
	}//main
	
	public static String realizarOperacao(String caminho) throws IOException{
		URL url = new URL(caminho);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestProperty("Request-Method", "GET");
		connection.setDoOutput(false);
		connection.setDoInput(true);
		connection.connect();
		BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		return br.readLine();
	}
}
