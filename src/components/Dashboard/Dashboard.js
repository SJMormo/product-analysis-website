import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import useData from '../../Hook/useData';

const Dashboard = () => {
    const [fetchData, setFetchData] = useData([]);
    return (
        <div className="row mt-5 w-100">
            <div className="col-md-6 col-sm-12">
                <h4 className='mb-3 text-center'>Month Wise Sell</h4>
                <LineChart className='mx-auto' width={600} height={300} data={fetchData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div className="col-md-6 col-sm-12">
                <h4 className='mb-3 text-center'>Investment vs Revenue</h4>
                <AreaChart className='mx-auto'
                    width={600}
                    height={300}
                    data={fetchData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>


        </div >
    );
};

export default Dashboard;