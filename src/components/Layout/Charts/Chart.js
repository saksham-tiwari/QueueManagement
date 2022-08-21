import React, { useState, useEffect } from 'react';
import { Line, plots } from '@ant-design/plots';
import Navbar from '../Navbar/Navbar';
import BarChart from './BarChart';
import './Charts.css'
import image from '../../Assets/pic.svg'
const DemoLine = () => {
    const [data, setData] = useState([]);
    let date = [];
    let value = [];
    useEffect(() => {
        chartData();
    }, []);
    const chartData = () => {
        fetch('https://d4ad-2405-205-1482-fa00-943c-798-b5a8-1b5a.in.ngrok.io/shop')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                console.log(json)
                let arr = json.split(" ");
                console.log(arr);
                let regex = /([0-9]{1,4}[-]{1,}[0-9]{1,}[-][0-9]{1,})|([0-9]{1,}[.][0-9]{1,})/
                let filtered = arr.filter((data) => {
                    return regex.test(data);
                })
                console.log(filtered);
                let regexdate = /[0-9]{1,4}[-]{1,}[0-9]{1,}[-][0-9]{1,}/
                if (filtered.length > 0) {
                    for (let i = 0; i < filtered.length; i++) {
                        if (regexdate.test(filtered[i])) {
                            date.push(filtered[i]);
                        } else {
                            value.push((filtered[i].split(","))[0]);
                        }
                    }
                }
                if (date.length > 0 && value.length > 0) {
                    let arr = [];
                    for (let i = 0; i < date.length; i++) {
                        arr.push({ Date: date[i], scales: parseFloat(value[i]) });
                    }
                    setData(arr);
                }
                console.log(data);
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            tickCount: 5,
        },
    };

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    let year = d.getFullYear();

    return (<>
        <div>
            <Navbar />
        </div>
        <div className='charts-analytics'>
            <div className='bar'>
    <br/>

                <BarChart />
                <div>
                    <h3><span>{day} </span>prediction</h3>
                </div>
            </div>
            <div className='line'>
    <br/>
    <br/>

                <Line {...config} />
                <div>
                <h3><span>{year + 1} </span>prediction</h3>
                </div>
            </div>
        </div>
    </>);
};

export default DemoLine