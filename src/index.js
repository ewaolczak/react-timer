import { createRoot } from 'react-dom/client';
import './styles/normalize.scss';
import './styles/global.scss';
import App from './App';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App />);
