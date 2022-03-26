import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Component for showing activity details of the user.
 * 
 * Displays a {@link https://recharts.org/en-US/api/BarChart|Bar Chart} graph from the library {@link https://recharts.org/en-US|Recharts}.
 * 
 * Called from parent component {@link ProfilPage|&lt;ProfilPage /&gt;}.
 *
 * @component
 */

function ActivityGraph({activityData}) {
    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="bg-primary p-4 rounded-md">
                    <p className="font-medium text-xs text-white mb-4">{payload[0].payload.tooltipKilogram}</p>
                    <p className="font-medium text-xs text-white">{payload[0].payload.tooltipCalories}</p>
                </div>
            );
        }
        
        return null;
    };

    return (
        <div className="bg-cardDark rounded-md relative">
            <ResponsiveContainer
                width="100%"
                height={260}
            >
                <BarChart
                    width={800}
                    height={300}
                    data={activityData}
                    barCategoryGap={35}
                    margin={{
                        top: 65,
                        right: 20,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 8"
                        vertical={false}
                        stroke="var(--text-muted)"
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="kilogram"
                        fill="var(--white)"
                        maxBarSize={6}
                    />
                    <Bar
                        dataKey="calories"
                        fill="var(--primary)"
                        maxBarSize={6}
                    />
                </BarChart>
            </ResponsiveContainer>
            <div className="absolute top-2 left-4">
                <span className="font-medium text-medium text-white">Activité quotidienne</span>
            </div>
        </div>
    );
}

ActivityGraph.propTypes = {
    /**
     * User's activity data
     */
    activityData: PropTypes.array.isRequired
}

export default ActivityGraph;
