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
                      const text = await zipEntry.async("text"); // Read as text to inspect SVG content
                      const isAdvanced = text.includes(
                        'data-statistic-type="advanced"'
                      );
                      const blob = new Blob([text], { type: "image/svg+xml" });
                      const url = URL.createObjectURL(blob);
                      return { url, isAdvanced };
                    }
                    return null;
                  }
                );

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
          // For direct SVG URLs (this logic might need adjustment)
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
