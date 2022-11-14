import React, { useEffect, useRef } from "react";
import Layout from "../../Layout";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/Legend";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import Slider from "@arcgis/core/widgets/Slider";

const Interactive = () => {
  const MyRef = useRef(null);

  useEffect(() => {
    const land = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/land_consolidation/FeatureServer/8",
    });
    const cash = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/cash_crops/FeatureServer/5",
    });
    const revenue = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/district_own_revenue_collection/FeatureServer/3",
    });
    const radical = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/radical_terraces_construction_and_maintainance/FeatureServer/6",
    });
    const vups = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/vup_fs/FeatureServer/0",
    });
    const human = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/human_security_issues_addressed/FeatureServer/1",
    });
    const progresssive = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/progressive_terrace/FeatureServer/7",
      outfields: ["*"],
    });
    const gender = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/gender_and_family_promotion/FeatureServer/2",
    });
    const demands = new FeatureLayer({
      url: "https://infrastructure.space.gov.rw/server/rest/services/Hosted/citizen_demands_complaints_resolved/FeatureServer/4",
    });
    // Sector level  GroupLayer
    const agriculture = new GroupLayer({
      title: "Agriculture",
      visible: true,
      layers: [land, cash],
    });
    const district = new GroupLayer({
      title: "District Own Revenue",
      layers: [revenue],
    });
    const environment = new GroupLayer({
      title: "Environment and Ressources",
      layers: [radical],
    });
    const citizen = new GroupLayer({
      title: "Citizen Demands",
      layers: [demands],
    });
    const social = new GroupLayer({
      title: "Social Protection",
      layers: [gender, human, vups],
    });
    // Sub_indicator level GroupLayer
    const demographicGroupLayer = new GroupLayer({
      title: "Economic Cluster",
      visible: true,
      visibilityMode: "exclusive",
      layers: [environment, district, agriculture],
      opacity: 0.75,
    });
    const demo0 = new GroupLayer({
      title: "Transformation Government Cluster",
      visible: true,
      visibilityMode: "exclusive",
      layers: [citizen],
      opacity: 0.75,
    });
    const demo1 = new GroupLayer({
      title: "Social Transformation Cluster",
      visible: true,
      visibilityMode: "exclusive",
      layers: [social],
      opacity: 0.75,
    });

    // Combination of GroupLayers
    const demo = new GroupLayer({
      title: "Polis Index",
      // visible: true,
      visibilityMode: "exclusive",
      layers: [demo1, demo0, demographicGroupLayer],
      opacity: 0.75,
    });
    /////////
    const map2 = new Map({
      basemap: "topo-vector",
    });
    const map1 = new MapView({
      container: MyRef.current,
      center: [30.09042, -1.9786],
      zoom: 9,
      map: map2,
    });
    //Adding layer to the map
    map1.when(function () {
      map2.add(demo);
      // map2.add(layer);
      // map2.add(indicator1);
    });
    const layerList = new LayerList({
      view: map1,
    });
    map1.ui.add(layerList, "top-left");
  }, []);
  return (
    <Layout>
      <div ref={MyRef} style={{ height: "95vh" }}></div>
    </Layout>
  );
};

export default Interactive;
