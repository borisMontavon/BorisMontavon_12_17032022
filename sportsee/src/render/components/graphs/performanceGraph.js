import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid,  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * Component for showing performance details of the user.
 * 
 * Displays a {@link https://recharts.org/en-US/api/RadarChart|Radar Chart} graph from the library {@link https://recharts.org/en-US|Recharts}.
 * 
 * Called from parent component {@link ProfilPage|&lt;ProfilPage /&gt;}.
 *
 * @component
 */

function PerformanceGraph({performanceData}) {
    return (
        <div className="bg-cardLight rounded-md relative">
            <ResponsiveContainer
                width="100%"
                height={260}
            >
                <RadarChart data={performanceData} margin={{top: 0, right: 25, bottom: 0, left: 25}}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="label" fontSize={10} />
                    <PolarRadiusAxis domain={[0, 250]} axisLine={false} tick={false} />
                    <Radar dataKey="value" strokeWidth={0} fill="var(--primary-opac)" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

PerformanceGraph.propTypes = {
    /**
     * User's performance data
     */
    performanceData: PropTypes.array.isRequired
}

export default PerformanceGraph;
