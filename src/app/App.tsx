import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { WhyHELOCsPage } from './components/pages/WhyHELOCsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { CalculatorsPage } from './components/pages/CalculatorsPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { SurveyPage } from './components/pages/SurveyPage';
import { ResultsPage } from './components/pages/ResultsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [surveyData, setSurveyData] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'why-helocs':
        return <WhyHELOCsPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'calculators':
        return <CalculatorsPage />;
      case 'partners':
        return <PartnersPage onNavigate={setCurrentPage} />;
      case 'survey':
        return <SurveyPage onNavigate={setCurrentPage} onSubmit={(data) => {
          setSurveyData(data);
          setCurrentPage('results');
        }} />;
      case 'results':
        return surveyData ? <ResultsPage onNavigate={setCurrentPage} surveyData={surveyData} /> : <HomePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}