import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { SMLCExplanation } from '../components/SMLC/explanation/SMLCExplanation';
import Layout from '../components/Layout';
import ContactPage from '../components/contact/ContactPage';
import TheoreticalFoundations from '../components/theoretical/TheoreticalFoundations';
import MeasurementConsiderations from '../components/theoretical/MeasurementConsiderations';
import FrameworkComparison from '../components/theoretical/FrameworkComparison';
import InteractiveAssessment from '../components/assessment/InteractiveAssessment';
import SimplifiedFramework from '../components/overview/SimplifiedFramework';
import ValidationFeedback from '../components/validation/ValidationFeedback';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/overview" element={<SimplifiedFramework />} />
                    <Route path="/explanation" element={<SMLCExplanation />} />
                    <Route path="/foundations" element={<TheoreticalFoundations />} />
                    <Route path="/measurement" element={<MeasurementConsiderations />} />
                    <Route path="/comparison" element={<FrameworkComparison />} />
                    <Route path="/assessment" element={<InteractiveAssessment />} />
                    <Route path="/feedback" element={<ValidationFeedback />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
