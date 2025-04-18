import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { SMLCExplanation } from '../components/SMLC/explanation/SMLCExplanation';
import ChallengePage from '../components/hackathon/ChallengePage';
import Layout from '../components/Layout';
import TeamAssessment from '../components/teams/TeamAssessment';
import ContactPage from '../components/contact/ContactPage';
import ElectionPage from '../components/election/ElectionPage';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/explanation" element={<SMLCExplanation />} />
                    <Route path="/challenge" element={<ChallengePage />} />
                    <Route path="/teams/assessment" element={<TeamAssessment />} />
                    <Route path="/contact" element={<ContactPage />} />
                    
                    {/* Election routes with language support */}
                    <Route path="/election" element={<Navigate to="/en/election" replace />} />
                    <Route path="/:lang/election" element={<ElectionPage />} />
                    
                    {/* Redirect old campaign URL to new election URL */}
                    <Route path="/campaign" element={<Navigate to="/en/election" replace />} />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
