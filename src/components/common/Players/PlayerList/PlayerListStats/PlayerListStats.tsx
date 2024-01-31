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
      .then(async (response: any) => {
        const zip = new JSZip();
        const content = await zip.loadAsync(response.data);
        const svgPromises = Object.keys(content.files).map(
          async (relativePath) => {
            const zipEntry = content.files[relativePath];
            if (zipEntry.name.endsWith(".svg")) {
              const blob = await zipEntry.async("blob");
              const text = await new Response(blob).text(); // Convert the blob to text to inspect the SVG content
              const isAdvanced = text.includes(
                'data-statistic-type="advanced"'
              ); // Check if the SVG content contains the advanced tag
              const url = URL.createObjectURL(blob);
              return { url, isAdvanced } as SvgData;
            }
            return null;
          }
        );

        // Resolve all promises and filter out any null values from non-svg files
        const svgDataResults = await Promise.all(svgPromises);
        const filteredSvgData = svgDataResults.filter(
          (item): item is SvgData => item !== null
        );
        setSvgData(filteredSvgData);
        setIsLoading(false);
      })
      .catch((error: any) => {
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
              <object
                key={index}
                data={data.url}
                type="image/svg+xml"
                className={`svg-image ${data.isAdvanced ? "advanced" : ""}`}
                aria-label={`Statistic ${index}`}
              >
                {/* Fallback content if SVGs are not supported or fail to load */}
                <img src="fallback-image.png" alt={`Statistic ${index}`} />
              </object>
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
