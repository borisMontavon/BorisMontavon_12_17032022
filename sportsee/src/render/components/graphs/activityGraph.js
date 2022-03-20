import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function ActivityGraph({activityData}) {
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
                    barCategoryGap={20}
                    margin={{
                        top: 65,
                        right: 20,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false}  />
                    <YAxis orientation="right" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="kilogram" fill="var(--white)" maxBarSize={6} />
                    <Bar dataKey="calories" fill="var(--primary)" maxBarSize={6} />
                </BarChart>
            </ResponsiveContainer>
            <div className="absolute top-2 left-4">
                <span className="font-medium text-medium text-white">Activité quotidienne</span>
            </div>
        </div>
    );
}

ActivityGraph.propTypes = {
    activityData: PropTypes.array
}

export default ActivityGraph;
