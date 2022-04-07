import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Chart component for showing average sessions details of the user.
 * 
 * Displays a {@link https://recharts.org/en-US/api/LineChart|Line Chart} graph from the library {@link https://recharts.org/en-US|Recharts}.
 * 
 * Called from parent component {@link ProfilPage|&lt;ProfilPage /&gt;}.
 *
 * @component
 */

function AverageSessionsGraph({averageSessionsData}) {
    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="bg-white p-2 rounded-md">
                    <p className="font-medium text-xs">{payload[0].payload.tooltip}</p>
                </div>
            );
        }
        
        return null;
    };

    return (
        <div className="bg-primary rounded-md relative">
            <ResponsiveContainer
                width="100%"
                height={260}
            >
                <LineChart
                    data={averageSessionsData}
                    margin={{
                        top: 65,
                        right: 20,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        stroke="rgba(255, 255, 255, 0.55)"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="var(--white)"
                        dot={false}
                        activeDot={{ r: 4 }}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
            <div className="absolute top-2 left-4">
                <span className="font-medum text-medium text-white">Durée moyenne des<br />sessions</span>
            </div>
        </div>
    );
}

AverageSessionsGraph.propTypes = {
    /**
     * User's average sessions data
     */
    averageSessionsData: PropTypes.array.isRequired
}

export default AverageSessionsGraph;
