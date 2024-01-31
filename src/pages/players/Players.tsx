import { Navbar, Footer } from "../../components/layout";
import {
  PlayerListHeader,
  PlayerListTable,
  PlayerListStats,
} from "../../components/common/Players/PlayerList";

import "../../assets/styles/style.css";

function Players() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <PlayerListHeader />
        <PlayerListTable />
        <PlayerListStats />
      </div>
      <Footer />
    </div>
  );
}

export default Players;
