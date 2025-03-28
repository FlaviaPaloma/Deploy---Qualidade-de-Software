# Deploy---Qualidade-de-Software

API de Busca de CEP (ViaCEP)
Esta funcionalidade utiliza a API ViaCEP para buscar informações relacionadas a um CEP (Código de Endereçamento Postal) no Brasil. Ao inserir um CEP válido de 8 dígitos, a aplicação faz uma requisição HTTP para o serviço da ViaCEP e retorna os seguintes dados:

Logradouro: O nome da rua ou avenida associada ao CEP.

Bairro: O bairro correspondente ao CEP.

Cidade e UF: A cidade e a Unidade Federativa (Estado) relacionadas ao CEP.

Como Funciona:
O usuário insere um CEP no campo de entrada.

A aplicação verifica se o CEP tem 8 dígitos e se é um número válido.

Em seguida, faz uma requisição à API ViaCEP para buscar os dados do endereço.

Se o CEP for encontrado, as informações são exibidas na página. Caso contrário, uma mensagem de erro é mostrada.

Endereço da API:
URL: https://viacep.com.br/ws/{CEP}/json/

Exemplo de Resposta:
json
Copiar
Editar
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}
