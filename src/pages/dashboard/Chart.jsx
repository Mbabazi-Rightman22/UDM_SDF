import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

// const [transport, setTransport] = useState();
// const [social, setSocial] = useState();

// const transport = {
//   url: "",
// };
// const social = {
//   url: "",
// };
// useEffect(() => {
//   fetch_Economy();
// }, [economic]);

export const data = {
  labels: [
    "Economic Cluster",
    "Transformation Cluster",
    "Social Transformation Cluster",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [17, 12, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Policy index",
    },
    indexLabel: "{label}: {y}%",
    startAngle: -90,
  },
};

export default function App() {
  const [select, setSelect] = useState([]);
  const url_Sel = {
    url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/udm_data_finding/FeatureServer/8/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&timeReferenceUnknownClient=false&sqlFormat=none&resultType=&datumTransformation=&lodType=geohash&lod=&lodSR=&f=json&token=A1pQdZvw0SMX7_T_iLpQTgUPGamH9_vvmp__hzTx88bGR9qlxcDRwdKuwvVMKrdftcjGCF3bZY4b493wMzpjNAiWJyVcYXKIvE-WXRLp_uvOaii6Fr3o1IN6fV-UJdkCT_ce1OySdZcK_pfmGfvnELPROFFQFMMZ2O8jwpZb0HCBp2PoaeoCSENuylkMgfhVs_HImrKTj78c2ooVQ_UHSHctZoV4_YGfMogwxz2dHFniUrf5w3i5_thY_tuTGsWf",
  };
  useEffect(() => {
    axios
      .get(url_Sel)
      .then((res) => {
        console.log("+++++++++++++++++++++++++++++++++++++++==", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="grid grid-col-2 gap-2 w-full">
      <div className="col-span-2 h-36 ">
        {select.map((select) => (
          <li key={select.id}>{select.title}</li>
        ))}
        <select
          className="flex w-68 h-8 ml-9 mt-2 px-2 border-4 justify-items-center  self-auto"
          onChange={(e) => e.target.value}
        >
          {/* <optgroup label="Sub Indicator">
          </optgroup> */}

          <option selected value="">
            Policy Index
          </option>
          <option value="Economic">Economic Cluster</option>
          <option value="Transformation">
            Transformation Government Cluster
          </option>
          <option value="Social">Social Transformation Cluster</option>
          {/* <optgroup label="Sector">Sector</optgroup>
          <option>Agriculture</option>
          <option>District Own Revenue</option>
          <option>Environment and Resources</option> */}
        </select>
      </div>
      <div className="col-span-2 h-52 w-68">
        <Pie data={data} options={options1} />
      </div>
    </div>
  );
}
