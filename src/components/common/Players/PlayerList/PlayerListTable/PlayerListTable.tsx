import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  buttonClassName: any;
  buttonClassNameOverride: any;
  inputType: string;
  inputType1: string;
}

export const PlayerListTable = ({
  buttonClassName,
  buttonClassNameOverride,
  inputType = "text",
  inputType1 = "number",
}: Props): JSX.Element => {
  return (
    <div className="player-list-table">
      <div className="table">
        <div className="table-header">
          <div className="content">
            <div className="heading">Players</div>
            <div className="text">List of all players</div>
          </div>
          <div className="actions">
            <button className="button">
              <button className="text-wrapper">Sort</button>
            </button>
            <button className={`button-wrapper ${buttonClassName}`}>
              <button className={`div ${buttonClassNameOverride}`}>
                Filter
              </button>
            </button>
          </div>
        </div>
        <div className="table-filters">
          <div className="row">
            <div className="actions-2">
              <div className="input">
                <img className="img" alt="Search" src="search.svg" />
                <input
                  className="search"
                  placeholder="Search"
                  type={inputType}
                />
              </div>
              <button className="button-2">
                <img className="img" alt="Icon filters" src="filters.svg" />
                <button className="text-wrapper">Filters</button>
              </button>
            </div>
            <div className="text-2">Showing 1-50 of 500</div>
          </div>
          <div className="row">
            <div className="tags">
              <div className="tag">
                <div className="text-wrapper-2">Tag</div>
                <img className="clear" alt="Clear" src="clear.svg" />
              </div>
              <div className="tag">
                <div className="text-wrapper-2">Tag</div>
                <img className="clear" alt="Clear" src="image.svg" />
              </div>
              <div className="tag">
                <div className="text-wrapper-2">Tag</div>
                <img className="clear" alt="Clear" src="clear-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="table-column">
            <div className="table-header-2">
              <div className="text-wrapper-3">Name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-4">Full name</div>
            </div>
          </div>
          <div className="table-column-2">
            <div className="table-header-2">
              <div className="text-wrapper-3">Role</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Striker</div>
            </div>
          </div>
          <div className="table-column-3">
            <input className="number" placeholder="Age" type={inputType1} />
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">14</div>
            </div>
          </div>
          <div className="table-column-2">
            <div className="table-header-2">
              <div className="text-wrapper-3">Club</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">Team name</div>
            </div>
          </div>
          <div className="table-column-4">
            <div className="table-header-2">
              <div className="text-wrapper-3">Market Value</div>
              <img
                className="img"
                alt="Ico arrows arrow"
                src="arrow-downward.svg"
              />
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
            <div className="table-cell">
              <div className="text-wrapper-5">£ 1.4M</div>
            </div>
          </div>
          <div className="table-column-5">
            <div className="table-header-3" />
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">View</div>
            </div>
          </div>
        </div>
        <div className="table-pagination">
          <div className="page-buttons">
            <button className="button-3">
              <img
                className="img"
                alt="Icon chevron left"
                src="chevron-left.svg"
              />
              <button className="text-wrapper">Prev</button>
            </button>
            <div className="pagination-numbers">
              <div className="content-2">
                <div className="text-wrapper-6">1</div>
              </div>
              <div className="pagination-number">
                <div className="content-3">
                  <div className="text-wrapper-6">2</div>
                </div>
              </div>
              <div className="pagination-number">
                <div className="content-3">
                  <div className="text-wrapper-6">3</div>
                </div>
              </div>
              <div className="pagination-number">
                <div className="content-3">
                  <div className="text-wrapper-6">4</div>
                </div>
              </div>
            </div>
            <button className="button-2">
              <button className="text-wrapper">Next</button>
              <img
                className="img"
                alt="Icon chevron right"
                src="chevron-right.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerListTable.propTypes = {
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
};
