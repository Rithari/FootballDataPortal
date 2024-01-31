import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCompetitionById,
  fetchCompetitonStatistics,
} from "../../../../../api/competitions-api";
import "./style.css";

export const CompetitionInfoHeader = (): JSX.Element => {
  const { id: competitionId } = useParams();

  // Helper function to format numbers with thousand separators
  const formatNumber = (num: number) => num.toLocaleString();

  // Helper function to format money values
  const formatCurrency = (value: number, currency: string = "EUR") =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
      value
    );

  // Helper function to format percentage values
  const formatPercentage = (value: number) => `${value.toFixed(2)}%`;

  const [competitionData, setCompetitionData] = useState<{
    competition: {
      competitionId: string;
      competitionCode: string;
      name: string;
      subType: string;
      type: string;
      countryId: number;
      countryName: string;
      domesticLeagueCode: string;
      confederation: string;
      url: string;
    };
    clubCount: number;
    totalMarketValue: number;
    totalNumberOfPlayers: number;
  } | null>(null);

  const [competitionStats, setCompetitionStats] = useState<{
    averageMarketValue: number;
    averageAge: number;
    totalForeigners: number;
    averageForeignersPercentage: number;
  } | null>(null);

  useEffect(() => {
    const getCompetitionData = async () => {
      try {
        const competitionData = await fetchCompetitionById(competitionId || "");
        setCompetitionData(competitionData);

        const competitionStats = await fetchCompetitonStatistics(
          competitionId || ""
        );
        setCompetitionStats(competitionStats);
      } catch (error) {
        console.error("Failed to fetch competition:", error);
      }
    };
    getCompetitionData();
  }, [competitionId]);

  if (!competitionData) {
    return <div className="league-info-header">Loading...</div>;
  }

  return (
    <div className="league-info-header">
      <div className="content">
        <div
          className="user"
          style={{
            backgroundImage: `url(https://tmssl.akamaized.net/images/logo/header/${competitionData.competition.competitionId.toLowerCase()}.png)`,
          }}
        />
        <div className="div">
          <div className="column">
            <div className="heading">{competitionData.competition.name}</div>
            <p className="text">
              {formatCurrency(competitionData.totalMarketValue)} Total Market
              Value
            </p>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Teams</div>
                <div className="text-2">{competitionData.clubCount}</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">ø-Market value</div>
                <div className="text-2">
                  {competitionStats?.averageMarketValue &&
                    formatCurrency(competitionStats.averageMarketValue, "EUR")}
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Players</div>
                <div className="text-2">
                  {competitionData.totalNumberOfPlayers}
                </div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">ø-Age</div>
                <div className="text-3">
                  {competitionStats?.averageAge.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Foreigners</div>
                <div className="text-2">
                  {competitionStats?.totalForeigners &&
                    `${formatNumber(
                      competitionStats.totalForeigners
                    )} (${formatPercentage(
                      competitionStats.averageForeignersPercentage
                    )})`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
