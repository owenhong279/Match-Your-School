# Match-Your-School

A web application to help international students find their ideal university in Australia based on their preferences and interests, featuring an AI-powered chat interface for personalized guidance.

## Features

- Interactive landing page with Ken Burns effect background
- Smooth page transitions and animations
- AI-powered chat interface for personalized university guidance
- Multiple navigation paths through the application:
  - Homepage with "Get Started" button
  - Introduction page with educational resources
  - Interactive chat interface for university exploration
- Direct links to official Australian education resources
- Responsive design for all device sizes

## Technologies Used

- React.js (v19.0.0)
- React Router DOM (v7.3.0) for navigation
- Axios for API communication
- CSS3 with advanced animations
- AI API integration
- Environment variable configuration for API keys

## Getting Started

### Prerequisites

- Node.js (version 14.0 or higher)
- npm (version 6.0 or higher)
- Your own API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/owenhong279/Match-Your-School.git
```

2. Navigate to the project directory
```bash
cd match-your-school
```

3. Install dependencies
```bash
npm install
```

4. Create a .env file in the root directory and add your DeepSeek API key:
```
REACT_APP_DEEPSEEK_API_KEY = your_api_key_here
```

5. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
match-your-school/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Introduction.js
│   │   ├── Introduction.css
│   │   ├── TellUsAboutYou.js
│   │   └── TellUsAboutYou.css
│   ├── images/
│   │   ├── au.jpg
│   │   ├── question.jpg
│   │   └── uni.jpg
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Key Components

- `App.js`: Main application component with routing setup
- `Introduction.js`: Educational resources and navigation component
- `TellUsAboutYou.js`: AI-powered chat interface for university guidance

## Features in Detail

### Homepage
- Animated background with Ken Burns effect
- "Get Started" button for navigation
- Responsive design

### Introduction Page
- Educational resource links
- Interactive feature boxes
- Background image with overlay
- Smooth transitions

### AI Chat Interface
- Real-time chat with AI assistant
- Character-limited responses (200 chars)
- Loading states and typing animations
- Error handling

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/newFeature`)
3. Commit your changes (`git commit -m 'Add some new Feature'`)
4. Push to the branch (`git push origin feature/newFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Study Australia](https://www.studyaustralia.gov.au/en) resources
- Australian Universities data
- Immigration information from the Department of Home Affairs
- AI for chat functionality