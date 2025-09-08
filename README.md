# 🍳 Insta-Recipe

> Transform food photos into delicious recipes with artificial intelligence!

## 📱 About the Project

Insta-Recipe is an innovative mobile app that uses artificial intelligence to analyze food photos and automatically generate complete recipes. Perfect for anyone who wants to discover how to prepare that dish they saw at a restaurant or in a photo online.

## ✨ Features

- 📸 **Photo Capture**: Take photos directly in the app or select from gallery
- 🤖 **AI Analysis**: Automatic recognition of ingredients and dishes
- 📝 **Recipe Generation**: Complete recipes with ingredients and instructions
- 💾 **Recipe Management**: Save your favorite recipes for later reference
- 📱 **Intuitive Interface**: Modern and easy-to-use design
- 🔐 **User Authentication**: Secure login and signup system
- 📚 **Recipe Collection**: Organize your saved and created recipes
- 👤 **User Profile**: Manage your account and preferences

## 🚀 Technologies Used

- **Frontend**: React Native + Expo
- **Navigation**: Expo Router (Stack + Tabs)
- **Language**: TypeScript
- **Platforms**: Android and iOS
- **AI**: OpenAI GPT-4 Vision API integration
- **Camera**: Expo Camera and Image Picker
- **Fonts**: Google Fonts (Poppins)
- **UI Components**: Custom component library
- **State Management**: React Hooks
- **Storage**: AsyncStorage for local data

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)
- OpenAI API Key (for recipe generation)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/insta-recipe.git
   cd insta-recipe
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure OpenAI API**

   - Get your API key from [OpenAI](https://platform.openai.com/api-keys)
   - Update `src/services/api.ts` with your API key
   - Replace `'your-openai-api-key-here'` with your actual key

4. **Start the project**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📱 How to Use

1. **Open the app** and sign up or log in
2. **Take a photo** using the camera tab to capture food
3. **Or select** a photo from your gallery
4. **Wait for AI analysis** to generate the recipe
5. **Review and edit** the generated recipe if needed
6. **Save the recipe** to your collection
7. **Browse recipes** in the menu tab
8. **Manage your collection** in the collection tab
9. **Update your profile** in the profile tab

## 🏗️ Project Structure

```
insta-recipe/
├── src/
│   ├── app/                     # App screens and navigation
│   │   ├── _layout.tsx         # Root layout with Stack navigation
│   │   ├── index.tsx           # Initial screen (redirects to auth)
│   │   ├── auth/               # Authentication screens
│   │   │   ├── _layout.tsx    # Auth layout
│   │   │   ├── login.tsx       # Login screen
│   │   │   └── signup.tsx      # Signup screen
│   │   └── (tabs)/             # Tab navigation screens
│   │       ├── _layout.tsx     # Tabs layout
│   │       ├── menu/           # Menu tab (all recipes)
│   │       ├── collection/     # Collection tab (saved recipes)
│   │       ├── camera/         # Camera tab (photo capture)
│   │       └── profile/        # Profile tab (user settings)
│   ├── components/             # Reusable components
│   │   ├── Button/            # Button component
│   │   ├── Card/              # Card component
│   │   ├── Input/             # Input component
│   │   └── Loading/           # Loading component
│   ├── services/              # API services
│   │   └── api.ts            # OpenAI API integration
│   ├── theme/                 # Theme system
│   │   ├── colors.ts         # Color palette
│   │   ├── typography.ts     # Font system
│   │   ├── spacing.ts        # Spacing and shadows
│   │   └── index.ts          # Theme exports
│   └── utils/                 # Utility functions
│       └── imageUtils.ts     # Image handling utilities
├── android/                   # Android configuration
├── ios/                      # iOS configuration
└── package.json              # Project dependencies
```

## 🔧 Development Setup

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

## 📦 Main Dependencies

- `expo`: Main framework
- `expo-router`: Navigation system
- `expo-camera`: Camera functionality
- `expo-image-picker`: Image selection
- `expo-font`: Font management
- `@expo-google-fonts/poppins`: Poppins font family
- `react-native`: Native framework
- `typescript`: Programming language
- `axios`: HTTP client for API calls
- `react-native-paper`: UI components

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
