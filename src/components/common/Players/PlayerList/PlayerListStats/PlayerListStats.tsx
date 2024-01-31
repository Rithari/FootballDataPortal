import React, { useState, useEffect } from "react";
import { fetchStatistics } from "../../../../../api/stats-api";
import JSZip from "jszip";

interface SvgData {
  url: string;
  isAdvanced: boolean;
}

const PlayerListStats: React.FC = () => {
  const [svgData, setSvgData] = useState<SvgData[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchStatistics("allPlayers")
      .then((result) => {
        if (result instanceof Blob) {
          // Handle Blob (ZIP file)
          const reader = new FileReader();
          reader.onload = function () {
            const arrayBuffer = this.result;
            const zip = new JSZip();
            zip
              .loadAsync(arrayBuffer)
              .then((content) => {
                const svgPromises = Object.keys(content.files).map(
                  async (relativePath) => {
                    const zipEntry = content.files[relativePath];
                    if (zipEntry.name.endsWith(".svg")) {
                      const blob = await zipEntry.async("blob");
                      const url = URL.createObjectURL(
                        new Blob([blob], { type: "image/svg+xml" })
                      );
                      return { url, isAdvanced: false }; // Modify as needed for 'isAdvanced'
                    }
                    return null;
                  }
                );

                // Resolve all promises and filter out null values
                return Promise.all(svgPromises).then((results) =>
                  results.filter((item): item is SvgData => item !== null)
                );
              })
              .then((filteredSvgData) => {
                setSvgData(filteredSvgData);
                setIsLoading(false);
              })
              .catch((error) => {
                console.error("Error processing ZIP file:", error);
                setIsLoading(false);
              });
          };
          reader.onerror = function (error) {
            console.error("Error reading blob:", error);
            setIsLoading(false);
          };
          reader.readAsArrayBuffer(result);
        } else {
          // Handle string[] (URLs of SVGs)
          const svgData = result.map((url) => ({
            url,
            isAdvanced: false,
          })) as SvgData[];
          setSvgData(svgData);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching SVGs:", error);
        setIsLoading(false);
      });
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAdvanced(event.target.checked);
  };

  return (
    <div className="player-list-stats">
      <div className="section-title">
        <h2 className="heading">Player Statistics</h2>
        <p className="description">
          Explore detailed player statistics and visualizations.
        </p>
        <div className="controls">
          <label>
            <input
              type="checkbox"
              checked={showAdvanced}
              onChange={handleCheckboxChange}
            />
            Show Advanced Visualizations
          </label>
        </div>
      </div>
      <div className="svg-content">
        {isLoading ? (
          <p>Loading visualizations...</p>
        ) : svgData.length > 0 ? (
          svgData.map((data, index) =>
            (data.isAdvanced && showAdvanced) || !data.isAdvanced ? (
              <img
                key={index}
                src={data.url}
                alt={`Statistic ${index}`}
                className={data.isAdvanced ? "advanced" : ""}
              />
            ) : null
          )
        ) : (
          <p>No statistics available.</p>
        )}
      </div>
    </div>
  );
};

export default PlayerListStats;
