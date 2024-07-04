import React from 'react';
import Header from './components/common/Header';
import Newsletter from './components/common/Newsletter';
import PromotionsSlider from './components/common/PromotionsSlider';
import './assets/styles/global.css';

function App() {
    return (
        <div className="App">
            <Header />
            <PromotionsSlider />
            <Newsletter />
            
            {/* Aquí irán otros componentes y rutas */}
        </div>
    );
}

export default App;
