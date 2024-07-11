import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface DataPoint {
    x: number;
    y: number;
}

interface ChartData {
    id: string;
    data: DataPoint[];
}

const data: ChartData[] = [
    {
        id: 'Withdrawal',
        data: [
            { x: 0, y: 26.5 }, { x: 2, y: 26.7 }, { x: 4, y: 26.5 },
            { x: 6, y: 28 }, { x: 7, y: 28.5 }, { x: 8, y: 28.8 }, { x: 9, y: 28.5 }, 
            { x: 10, y: 28 }, { x: 10.5, y: 27 },{ x: 12, y: 26.5 }, 
            { x: 14, y: 26 }, { x: 15, y: 25.8 }, { x: 16, y: 25.9 }, 
            { x: 17, y: 26 }, { x: 18, y: 26.3 }, { x: 20, y: 26.6 }, 
             { x: 21, y: 26.9 },  { x: 22, y: 26 }, 
        ]
    },
    {
        id: 'Deposit',
        data: [
            { x: 0, y: 25.5 }, { x: 2, y: 26.4 }, { x: 4, y: 27 },
            { x: 6, y: 26.3 }, { x: 8, y: 27 }, { x: 10, y: 25.3 },
            { x: 12, y: 26.5 }, { x: 14, y: 26.3 }, { x: 16, y: 25.9 },
            { x: 18, y: 26.3 }, { x: 20, y: 26.4 }, { x: 22, y: 26 }
        ]
    },
    // {
    //     id: 'Payment',
    //     data: [
    //         { x: 0, y: 26.2 }, { x: 2, y: 26.5 }, { x: 4, y: 26.7 },
    //         { x: 6, y: 26.5 }, { x: 8, y: 26.2 }, { x: 10, y: 26 },
    //         { x: 12, y: 26.3 }, { x: 14, y: 26.5 }, { x: 16, y: 26.4 },
    //         { x: 18, y: 26.5 }, { x: 20, y: 26.2 }, { x: 22, y: 26 }
    //     ]
    // }
];

const CustomLineChart: React.FC = () => (
    <div className='h-[310px] w-full' >
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 25,
                max: 29,
                stacked: false,
                reverse: false
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={['#FFC107', '#FF5722', '#BDBDBD']}
            lineWidth={3}
            // pointSize={10}
            pointColor={{ theme: 'background' }}
            // pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            // legends={[
            //     {
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 100,
            //         translateY: 0,
            //         itemsSpacing: 0,
            //         itemDirection: 'left-to-right',
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemOpacity: 0.75,
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemBackground: 'rgba(0, 0, 0, .03)',
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
        />
    </div>
);

export default CustomLineChart;
