
// src/components/hackathon/Timeline.tsx
import React from 'react';
import {Clock} from "lucide-react";

const TimelineItem: React.FC<{
    time: string;
    title: string;
    description: string;
}> = ({ time, title, description }) => (
    <div className="relative pb-8">
        <div className="relative flex items-start space-x-3">
            <div>
                <div className="relative px-1">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center ring-8 ring-white">
                        <Clock className="h-5 w-5 text-white" />
                    </div>
                </div>
            </div>
            <div className="min-w-0 flex-1">
                <div>
                    <div className="text-sm leading-8 text-gray-500">
                        <time dateTime={time}>{time}</time>
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900">{title}</div>
                    <div className="mt-2 text-sm text-gray-700">{description}</div>
                </div>
            </div>
        </div>
    </div>
);

export const Timeline: React.FC = () => (
    <div className="flow-root">
        <ul role="list" className="-mb-8">
            {/* Add your timeline items here */}
            <TimelineItem
                time="9:00 AM"
                title="Kickoff & Introduction"
                description="Overview of SMLC framework and challenge guidelines"
            />
            {/* Add more timeline items */}
        </ul>
    </div>
);
