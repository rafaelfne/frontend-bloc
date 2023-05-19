Frontend Bloc
Este repositório contém duas aplicações: uma desenvolvida em Vue.js e outra em React.js utilizando o Vite como bundler. Além disso, há uma pasta chamada "core" que contém a lógica baseada na Clean Architecture e no padrão BLoC.

Aplicações
Vue.js
A pasta vue-app contém a aplicação desenvolvida em Vue.js. Esta é uma aplicação de exemplo que demonstra como utilizar a arquitetura BLoC em conjunto com a Clean Architecture no contexto do Vue.js. Você pode executar essa aplicação seguindo as instruções abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.
Abra um terminal na pasta vue-app.
Execute o comando npm install para instalar as dependências.
Execute o comando npm run dev para iniciar o servidor de desenvolvimento.
Acesse a aplicação no seu navegador através do endereço http://localhost:5173.
React.js
A pasta react-app contém a aplicação desenvolvida em React.js. Assim como a versão em Vue.js, esta é uma aplicação de exemplo que utiliza a arquitetura BLoC juntamente com a Clean Architecture no contexto do React.js. Para executar esta aplicação, siga as instruções abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.
Abra um terminal na pasta react-app.
Execute o comando npm install para instalar as dependências.
Execute o comando npm start para iniciar o servidor de desenvolvimento.
Acesse a aplicação no seu navegador através do endereço http://localhost:5174.
Core
A pasta core contém a lógica baseada na Clean Architecture e no padrão BLoC. Esta pasta é compartilhada entre as duas aplicações, já que o objetivo é utilizar a mesma lógica de negócio em ambos os frameworks. Dentro dessa pasta, você encontrará os arquivos e diretórios relacionados à lógica do negócio, como models, repositories, use cases e blocs.

Contribuindo
Sinta-se à vontade para contribuir com este repositório, seja corrigindo bugs, adicionando novos recursos ou melhorando a documentação. Para contribuir, siga as etapas abaixo:

Faça um fork deste repositório e clone-o em sua máquina.
Crie uma nova branch para suas alterações: git checkout -b minha-nova-feature.
Faça as alterações desejadas e adicione os arquivos modificados: git add .
Faça o commit das suas alterações: git commit -m "Adicionando nova feature".
Faça o push para o branch remoto: git push origin minha-nova-feature.
Abra um pull request neste repositório.
Licença
Este projeto está licenciado sob a licença MIT.
Espero que este README seja útil para você! Lembre-se de personalizá-lo e atualizá-lo de acordo com as necessidades específicas do seu projeto.
