import React from 'react';
import { SparklineComponent , Inject , SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({id , height , width , color , data , type , currentColor}) => {
  return (
    // <SparklineComponent 
    // id={id}
    // height={height}
    // width={width}
    // lineWidth={1}
    // valueType="Numeric"
    // fill={color}
    // border={{color : currentColor , width : 2}}
    // dataSource={data}
    // xName="x"
    // yName="y"
    // type={type}
    // tooltipSettings={{
    //   visible : true ,
    //   format : "${x} : data ${y}",
    //   trackLineSettings : {
    //     visible : true
    //   }
    // }}
    // >
    //   <Inject services={[SparklineTooltip]} />
    // </SparklineComponent>
    <div>
      <p className=" p-4 px-5 rounded-lg shadow-sm hover:drop-shadow-md bg-red-50 text-red-500">Sorre Can't Get The Chart</p>
    </div>
  )
}

export default SparkLine