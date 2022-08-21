import React, { useState, useEffect } from 'react';
import { Line, plots } from '@ant-design/plots';
import Navbar from '../Navbar/Navbar';
import { Column } from '@ant-design/plots';

const BarChart = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        barData();
    }, []);

    const barData = ()=>{
        fetch('https://6c7a-2405-205-1482-fa00-85f6-a648-8097-5f93.in.ngrok.io/customer')
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
                if(filtered.length>0){
                    let ar = [];
                    for(let i=0;i<filtered.length;i++){
                        ar.push({type:`${9+i}:00-${10+i}:00`,sales:parseFloat((filtered[i].split(","))[0])});
                    }
                    setData(ar);
                    console.log(ar);
                }
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    }
    const bargraph = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
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

    return(<>
        <Column {...bargraph} />
    </>);
};

export default BarChart