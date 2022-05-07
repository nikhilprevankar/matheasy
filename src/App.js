import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import HomePage from "./pages/landing/HomePage";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
