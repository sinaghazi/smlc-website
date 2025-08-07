import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { SMLCExplanation } from '../components/SMLC/explanation/SMLCExplanation';
import Layout from '../components/Layout';
import ContactPage from '../components/contact/ContactPage';
import InteractiveAssessment from '../components/assessment/InteractiveAssessment';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/explanation" element={<SMLCExplanation />} />
                    <Route path="/assessment" element={<InteractiveAssessment />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
