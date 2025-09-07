
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_TOOLS } from '../constants';
import type { Tool } from '../types';

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4">{tool.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4">{tool.description}</p>
        <Link to={`/tools/${tool.id}`} className="mt-auto bg-primary text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-600 transition-colors duration-300">
            Open Tool
        </Link>
    </div>
);


const ToolsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-secondary dark:text-white">Automotive Tools</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A collection of handy calculators and estimators to help you make informed decisions about your vehicle.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {ALL_TOOLS.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
};

export default ToolsPage;
