import axios from "axios";

const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchStatistics = async (
  statsCategory: string,
  identifier?: string
): Promise<Blob | string[]> => {
  const response = await axios.post(
    `${apiURL}/api/stats`,
    {
      stats_category: statsCategory,
      identifier,
    },
    {
      responseType: "blob", // Expect a blob response
    }
  );

  // Check if response.data is a Blob
  if (!(response.data instanceof Blob)) {
    throw new Error("Response data is not a Blob");
  }

  // Check content type from headers
  const contentType = response.headers["content-type"];

  if (contentType === "application/zip") {
    // Directly return the Blob for ZIP file
    return response.data;
  } else if (contentType === "image/svg+xml") {
    // Handle single SVG file
    const blob = new Blob([response.data], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    return [url];
  }

  throw new Error(`Unsupported content type: ${contentType}`);
};

export { fetchStatistics };
