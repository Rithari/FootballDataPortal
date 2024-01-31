import axios from "axios";
import JSZip from "jszip";

const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchStatistics = async (statsCategory: string, identifier?: string) => {
  const response = await axios.post(
    `${apiURL}/api/statistics`,
    {
      stats_category: statsCategory,
      identifier,
    },
    {
      responseType: "blob", // Expect a blob response
    }
  );

  // Check content type from headers
  const contentType = response.headers["content-type"];

  // Handle ZIP files
  if (contentType === "application/zip") {
    const zip = new JSZip();
    const zipData = await zip.loadAsync(response.data);
    const svgFiles = [];

    for (const filePath of Object.keys(zipData.files)) {
      if (filePath.endsWith(".svg")) {
        const fileData = await zipData.files[filePath].async("blob");
        const blob = new Blob([fileData], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        svgFiles.push(url);
      }
    }
    return svgFiles;
  }

  // Handle single SVG file
  else if (contentType === "image/svg+xml") {
    const blob = new Blob([response.data], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    return [url];
  }

  throw new Error(`Unsupported content type: ${contentType}`);
};

export { fetchStatistics };
