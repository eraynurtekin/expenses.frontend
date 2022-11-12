import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getExpensesPerCategory } from '../services/statistics';
import {useEffect,useState} from 'react';

const StatisticsPages = () => {
  const dispatch = useDispatch();
  //pulling state
  const expenseAmountPerCategory = useSelector(state => state.statisticsSlice.expenseAmountPerCategory);
  const[doughnut,setDougnut] = useState({
    labels:[],
    data:[],
  });

  useEffect(() =>{
    setDougnut({
      labels:expenseAmountPerCategory.map(x=>x.Key.Id),
      data:expenseAmountPerCategory.map(x=>x.Value)
    });
  },[expenseAmountPerCategory]);

  useEffect(() => {
    getExpensesPerCategory(dispatch);
  },[])

  const data = {
    labels:doughnut.labels,
    datasets:[{
      
      data: doughnut.data,
      backgroundColor:[
       '#007bff',
       '#FF0000',
       '#FFD700',
       '#28a745',
       '#FFFFFF'
      ]
    }]
  }
  Chart.register(ArcElement);
    return <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length} style={{maxWidth:'35rem',maxHeight:'35rem',margin:'auto',textAlign:'center'}}>
          <h4 style={{marginTop:'20px'}}>Expenses per Category</h4>
          <Doughnut data={data}/>
          
    </div>
}


export default StatisticsPages;