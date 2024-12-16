import { useEffect, useRef } from 'react';
import './index.css';

const App = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const colors = ['#26a69a', '#009688', '#00897b', '#000000', '#000111'];
    let index = 0;

    const changeBackgroundColor = () => {
      document.body.style.transition = 'background-color 3s ease';
      document.body.style.backgroundColor = colors[index];
      if (imgRef.current) {
        imgRef.current.style.transition = 'filter 3s ease';
        imgRef.current.style.filter = `hue-rotate(${index * 20}deg) saturate(2) brightness(1.2)`;
      }
      index = (index + 1) % colors.length;
    };

    const intervalId = setInterval(changeBackgroundColor, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <a href="https://www.biotik.cl" target="_blank" rel="noopener noreferrer" className="text-4xl font-bold text-white mb-4">
        www.biotik.cl
      </a>
      <a href="https://www.biotik.cl" target="_blank" rel="noopener noreferrer">
        <img ref={imgRef} src="./img/logo3.png" alt="Biotico Logo" className="w-300" />
      </a>
    </div>
  );
};

export default App;
