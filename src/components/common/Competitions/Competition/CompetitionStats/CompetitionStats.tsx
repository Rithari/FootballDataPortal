import React, { useState, useEffect } from "react";
import { fetchStatistics } from "../../../../../api/stats-api"; // Adjust the import path as needed
import "./style.css";

export const CompetitionStats = (): JSX.Element => {
  const [showAdvancedStats, setShowAdvancedStats] = useState(false);
  const [standardStatsSvg, setStandardStatsSvg] = useState("");
  const [advancedStatsSvg, setAdvancedStatsSvg] = useState("");

  useEffect(() => {
    // Function to load statistics SVGs
    const loadStatistics = async () => {
      try {
        const standardPayload = {
          statsCategory: "competition",
          identifier: "standard",
        };
        const advancedPayload = {
          statsCategory: "competition",
          identifier: "advanced",
        };

        const standardResponse = await fetchStatistics(standardPayload);
        const advancedResponse = await fetchStatistics(advancedPayload);

        setStandardStatsSvg(standardResponse.data); // Assuming response.data contains the SVG content
        setAdvancedStatsSvg(advancedResponse.data);
      } catch (error) {
        console.error("Error fetching statistics SVGs:", error);
      }
    };

    loadStatistics();
  }, []); // Empty dependency array to run only once on component mount

  const handleToggleChange = () => {
    setShowAdvancedStats(!showAdvancedStats);
  };

  return (
    <div className="player-list-stats">
      {/* Existing JSX */}
      <div className="content">
        <div className="statistics-row">
          {/* Standard Stats */}
          {standardStatsSvg && (
            <div
              className="placeholder-image-container"
              dangerouslySetInnerHTML={{ __html: standardStatsSvg }}
            />
          )}
          {/* Advanced Stats - shown based on toggle */}
          {showAdvancedStats && advancedStatsSvg && (
            <div
              className="placeholder-image-container"
              dangerouslySetInnerHTML={{ __html: advancedStatsSvg }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
