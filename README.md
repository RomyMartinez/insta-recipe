# 🍳 Insta-Recipe

> Transforme fotos de comida em receitas deliciosas com inteligência artificial!

## 📱 Sobre o Projeto

Insta-Recipe é um aplicativo móvel inovador que utiliza inteligência artificial para analisar fotos de pratos e gerar receitas completas automaticamente. Ideal para quem quer descobrir como preparar aquela comida que viu em um restaurante ou foto na internet.

## ✨ Funcionalidades

- 📸 **Captura de Fotos**: Tire fotos diretamente no app ou selecione da galeria
- 🤖 **Análise por IA**: Reconhecimento automático de ingredientes e pratos
- 📝 **Geração de Receitas**: Receitas completas com ingredientes e instruções
- 💾 **Histórico**: Salve suas receitas favoritas para consulta posterior
- 📱 **Interface Intuitiva**: Design moderno e fácil de usar

## 🚀 Tecnologias Utilizadas

- **Frontend**: React Native + Expo
- **Roteamento**: Expo Router
- **Linguagem**: TypeScript
- **Plataformas**: Android e iOS
- **IA**: Integração com APIs de reconhecimento de imagem

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/insta-recipe.git
   cd insta-recipe
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

## 📱 Como Usar

1. Abra o aplicativo
2. Toque no botão de câmera para tirar uma foto
3. Ou selecione uma foto da sua galeria
4. Aguarde a análise da IA
5. Visualize a receita gerada
6. Salve a receita se desejar

## 🏗️ Estrutura do Projeto

```
insta-recipe/
├── src/
│   └── app/
│       ├── _layout.tsx          # Layout principal da aplicação
│       ├── index.tsx            # Tela inicial
│       └── recipes/
│           ├── index.tsx        # Lista de receitas
│           └── [id].tsx         # Receita individual
├── android/                     # Configurações Android
├── ios/                        # Configurações iOS
└── package.json                # Dependências do projeto
```

## 🔧 Configuração de Desenvolvimento

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 📦 Dependências Principais

- `expo`: Framework principal
- `expo-router`: Sistema de roteamento
- `react-native`: Framework nativo
- `typescript`: Linguagem de programação

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Desenvolvedor**: [Seu Nome]
- **Email**: [seu-email@exemplo.com]
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Expo team pelo framework incrível
- React Native community
- Todos os contribuidores que ajudaram no projeto

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**
