
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ALL_TOOLS } from '../constants';

const CarLoanCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState(25000);
    const [interestRate, setInterestRate] = useState(5);
    const [loanTerm, setLoanTerm] = useState(60);
    const [downPayment, setDownPayment] = useState(5000);

    const monthlyPayment = useMemo(() => {
        const principal = loanAmount - downPayment;
        if (principal <= 0) return 0;

        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm;

        if (monthlyInterestRate === 0) {
            return principal / numberOfPayments;
        }

        const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        return payment;
    }, [loanAmount, interestRate, loanTerm, downPayment]);

    const totalPayment = monthlyPayment > 0 ? monthlyPayment * loanTerm : 0;
    const totalInterest = totalPayment > 0 ? totalPayment - (loanAmount - downPayment) : 0;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    return (
        <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Calculator Inputs</h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Loan Amount: <span className="font-bold text-primary dark:text-accent">{formatCurrency(loanAmount)}</span></label>
                            <input id="loanAmount" type="range" min="1000" max="100000" step="1000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                        <div>
                            <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Down Payment: <span className="font-bold text-primary dark:text-accent">{formatCurrency(downPayment)}</span></label>
                            <input id="downPayment" type="range" min="0" max={loanAmount} step="500" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                        <div>
                            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Interest Rate (%): <span className="font-bold text-primary dark:text-accent">{interestRate.toFixed(2)}%</span></label>
                            <input id="interestRate" type="range" min="0" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                        <div>
                            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Loan Term (Months): <span className="font-bold text-primary dark:text-accent">{loanTerm}</span></label>
                            <input id="loanTerm" type="range" min="12" max="84" step="12" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-gray-50 dark:bg-secondary p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Estimated Results</h3>
                    <div className="text-center mb-6">
                        <p className="text-lg text-gray-600 dark:text-gray-400">Monthly Payment</p>
                        <p className="text-5xl font-extrabold text-primary dark:text-accent">{formatCurrency(monthlyPayment)}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-700 dark:text-gray-300">
                            <span>Total Principal Paid:</span>
                            <span className="font-semibold">{formatCurrency(loanAmount - downPayment)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700 dark:text-gray-300">
                            <span>Total Interest Paid:</span>
                            <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                        </div>
                        <hr className="border-gray-300 dark:border-gray-600" />
                        <div className="flex justify-between font-bold text-secondary dark:text-white">
                            <span>Total of All Payments:</span>
                            <span className="font-bold">{formatCurrency(totalPayment)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlaceholderTool: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">This tool is currently under development. Please check back soon!</p>
    </div>
);

const ToolDetailPage: React.FC = () => {
    const { toolId } = useParams<{ toolId: string }>();
    const tool = ALL_TOOLS.find(t => t.id === toolId);

    const renderTool = () => {
        switch (toolId) {
            case 'car-loan-calculator':
                return <CarLoanCalculator />;
            default:
                return tool ? <PlaceholderTool title={tool.title} /> : <div>Tool not found</div>;
        }
    };

    if (!tool) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Tool Not Found</h1>
                <p>The tool you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-secondary dark:text-white">{tool.title}</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {tool.description}
                </p>
            </div>
            {renderTool()}
        </div>
    );
};

export default ToolDetailPage;
