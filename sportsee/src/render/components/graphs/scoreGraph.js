import PropTypes from "prop-types";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function ScoreGraph({scoreData}) {
    const fillData = [
        {
            "score": 1,
            "fill": "var(--bg-dark)"
        }
    ];

    return (
        <div className="bg-cardDark rounded-md relative">
            <ResponsiveContainer
                width="100%"
                height={260}
            >
                <PieChart>
                    <Pie
                        data={fillData}
                        dataKey="score"
                        strokeWidth="0"
                    />
                    <Pie 
                        data={scoreData.scoreGraphData}
                        dataKey="score"
                        innerRadius={90}
                        outerRadius={100}
                        startAngle={90}
                        endAngle={450}
                        strokeWidth="0"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2 flex flex-col items-center">
                <span className="font-bold text-2xl text-white">{scoreData.scorePercentage}</span>
                <span className="text-textMuted text-base font-medium text-center">de votre<br />obectif</span>
            </div>
            <div className="absolute top-2 left-4">
                <span className="font-medium text-medium text-white">Score</span>
            </div>
        </div>
    );
}

ScoreGraph.propTypes = {
    scoreData: PropTypes.object
}

export default ScoreGraph;
