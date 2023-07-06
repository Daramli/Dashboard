import React from 'react';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective 
 , Inject , Legend , Category , StackingColumsSeries , Tooltip } from "@syncfusion/ej2-react-charts";
 import { stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis } from "../../data/dummy"

const Stacked = ({width , height}) => {
  return (
    // <ChartComponent width={width} height={height} id='charts'
    //  primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}
    //  chartArea={{border : {width : 0}}}
    //  tooltip={{enable : ture}}
    //  legendSettings={{background : "white"}}
    //  >
    //   <Inject services={[Legend , Category , StackingColumsSeries , Tooltip ]} />
    //   <SeriesCollectionDirective>
    //     {
    //       stackedCustomSeries.map((item , index) => <SeriesDirective key={index} {...item} />)
    //     }
    //   </SeriesCollectionDirective>
    // </ChartComponent>
    <div>
      <p className=" p-4 px-5 rounded-lg shadow-sm hover:drop-shadow-md bg-red-50 text-red-500">Sorre Can't Get The Chart</p>
    </div>
  )
}

export default Stacked