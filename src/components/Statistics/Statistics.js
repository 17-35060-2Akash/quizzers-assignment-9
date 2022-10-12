import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const topics = useLoaderData().data;

    return (
        <div className='statistics container-fluid'>
            <div className='statistics-container  mt-5 pt-5'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart className='barchart-container'
                        width={700}
                        height={400}
                        data={topics}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#fd8f24" />
                    </BarChart>
                </ResponsiveContainer>
                <p className='pb-5'><span className='fs-1'>Figure: </span> <span className='fs-2 text-wrap fw-lighter'>Quizzers Analytics per <br />Quiz Evaluation Questions</span></p>
            </div>
        </div>
    );
};

export default Statistics;